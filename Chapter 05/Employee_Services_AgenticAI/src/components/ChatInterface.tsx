import { useState, useEffect, useRef } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { ScrollArea } from "./ui/scroll-area";
import { ChatMessage } from "./ChatMessage";
import { Send, Paperclip } from "lucide-react";

interface Message {
  id: string;
  type: 'user' | 'assistant';
  content: string;
  timestamp: Date;
  agentCalls?: {
    agent: string;
    status: 'pending' | 'running' | 'complete';
    result?: string;
  }[];
  context?: {
    title: string;
    content: string;
    type: 'policy' | 'procedure' | 'data';
  }[];
  nextSteps?: string[];
  tradeOffs?: {
    option: string;
    pros: string[];
    cons: string[];
  }[];
}

interface ChatInterfaceProps {
  onAgentUpdate: (agents: any[]) => void;
  onReasoningUpdate: (steps: any[], currentThought?: string) => void;
}

export function ChatInterface({ onAgentUpdate, onReasoningUpdate }: ChatInterfaceProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      type: 'assistant',
      content: `Hello! I'm your Employee Services AI assistant. I understand you need help uploading your marriage certificate to the HR system. This is an important life event, and I'm here to guide you through the entire process step by step.

Let me start by understanding your specific situation. Could you tell me:
1. When did you get married?
2. Do you have your marriage certificate readily available?
3. Are you looking to update your beneficiary information, tax withholdings, or both?

I'll make sure we handle everything correctly according to company policy and help you avoid any common pitfalls.`,
      timestamp: new Date(Date.now() - 60000),
      context: [
        {
          title: "HR Policy 3.2.1 - Life Event Changes",
          content: "Employees have 30 days from a qualifying life event to make changes to benefits without waiting for open enrollment.",
          type: 'policy'
        }
      ],
      nextSteps: [
        "Share details about your marriage",
        "Upload your marriage certificate",
        "Review current benefit elections",
        "Update beneficiary information"
      ]
    }
  ]);
  
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [autoFlowStarted, setAutoFlowStarted] = useState(false);
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    if (scrollAreaRef.current) {
      const scrollContainer = scrollAreaRef.current.querySelector('[data-radix-scroll-area-viewport]');
      if (scrollContainer) {
        scrollContainer.scrollTop = scrollContainer.scrollHeight;
      }
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Auto-start demo flow
  useEffect(() => {
    if (!autoFlowStarted) {
      setAutoFlowStarted(true);
      startAutomaticDemo();
    }
  }, [autoFlowStarted]);

  const startAutomaticDemo = async () => {
    // Wait 3 seconds then start the demo
    await new Promise(resolve => setTimeout(resolve, 3000));
    
    // Step 1: User uploads marriage certificate
    const userMessage1: Message = {
      id: 'auto-1',
      type: 'user',
      content: `Hi! I got married last month (June 15th, 2024) and I have my marriage certificate ready to upload. I need to update my beneficiary information and also want to add my spouse to my health insurance. Here's my marriage certificate. 

[📄 Marriage_Certificate_Smith_Johnson.pdf - 2.3 MB]

Can you help me through this process?`,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage1]);
    
    // Wait 2 seconds then show AI typing
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsTyping(true);

    // Start AI processing with reasoning and agents
    await simulateDocumentProcessing();
    
    // Step 2: AI responds with document analysis
    await new Promise(resolve => setTimeout(resolve, 1000));
    const aiResponse1: Message = {
      id: 'auto-2',
      type: 'assistant',
      content: `Excellent! Congratulations on your marriage! 🎉 I can see you've uploaded your marriage certificate, and I'm now processing it through our secure document analysis system.

**Document Upload Status: ✅ Successful**
- File: Marriage_Certificate_Smith_Johnson.pdf
- Size: 2.3 MB
- Format: Valid PDF document
- Security scan: Passed

I'm now calling our specialized agents to extract the information and ensure everything complies with company policy. Let me walk you through what's happening behind the scenes...`,
      timestamp: new Date(),
      agentCalls: [
        { agent: 'Data Extractor Agent', status: 'complete', result: 'Certificate data extracted successfully' },
        { agent: 'Policy Agent', status: 'complete', result: 'Life event window confirmed (within 30 days)' },
        { agent: 'Document Validator', status: 'complete', result: 'Document authentic and legally valid' }
      ],
      context: [
        {
          title: "Extracted Information",
          content: "Marriage Date: June 15, 2024 | Spouse: Alex Johnson | Location: San Francisco, CA | Certificate ID: SF-2024-06-1547",
          type: 'data'
        },
        {
          title: "Life Event Eligibility",
          content: "✅ Within 30-day window for benefit changes. Deadline: July 15, 2024 (23 days remaining)",
          type: 'policy'
        }
      ]
    };

    setMessages(prev => [...prev, aiResponse1]);
    setIsTyping(false);

    // Step 3: Show HR system updates
    await new Promise(resolve => setTimeout(resolve, 4000));
    await simulateHRSystemUpdates();
    
    // Step 4: Final comprehensive response with options
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsTyping(true);
    
    await new Promise(resolve => setTimeout(resolve, 3000));
    const aiResponse2: Message = {
      id: 'auto-3',
      type: 'assistant',
      content: `Perfect! I've successfully processed your marriage certificate and updated your HR records. Here's a comprehensive overview of what I've accomplished and your next steps:

**✅ Completed Actions:**
- Marriage certificate validated and stored securely
- Employee record updated with marriage status
- Life event processing initiated
- Benefit eligibility confirmed (30-day window active)

**📋 Available Options:**
Based on your request to add your spouse to health insurance and update beneficiaries, I've analyzed your current benefits and prepared your options. The system has also checked your spouse's potential coverage from their employer for comparison.

**🔄 HR System Integration:**
- Employee ID: EMP-2847 status updated
- Benefits portal access enabled for spouse enrollment
- Automated notifications sent to payroll for tax withholding updates
- Emergency contact system flagged for updates`,
      timestamp: new Date(),
      context: [
        {
          title: "Current Health Plan Analysis",
          content: "You're currently on our Premium PPO plan ($145/month individual). Adding spouse would cost additional $198/month for family coverage.",
          type: 'data'
        },
        {
          title: "Spouse's Current Coverage",
          content: "System detected potential existing coverage. Coordination of benefits analysis suggests comparing total costs and coverage levels.",
          type: 'procedure'
        },
        {
          title: "Tax Implications",
          content: "Marriage may affect your tax withholding. Current W-4 shows 'Single' status - updating to 'Married Filing Jointly' could reduce withholdings.",
          type: 'policy'
        }
      ],
      tradeOffs: [
        {
          option: "Add spouse to company health insurance",
          pros: ["Consolidated family coverage", "Lower out-of-pocket maximums", "Simplified claims process", "Better network coverage in your area"],
          cons: ["Higher monthly premiums (+$198/month)", "Spouse loses current provider relationships", "Potential gap in coverage during transition"]
        },
        {
          option: "Maintain separate health plans",
          pros: ["Lower individual costs", "Keep existing doctors", "Dual coverage coordination benefits", "Flexibility in plan choices"],
          cons: ["Complex benefit coordination", "Higher combined deductibles", "Different pharmacy networks", "More administrative overhead"]
        },
        {
          option: "Switch to spouse's employer plan",
          pros: ["Potentially lower costs", "New coverage options", "Different network benefits"],
          cons: ["Lose current provider relationships", "May have different coverage levels", "Need to coordinate transition timing"]
        }
      ],
      nextSteps: [
        "Review detailed cost comparison for all insurance options",
        "Update beneficiary information for life insurance ($150K policy)",
        "Submit new W-4 form for married tax status",
        "Update emergency contacts and dependent information",
        "Schedule benefits consultation call (recommended)",
        "Review and update FSA/HSA contribution limits"
      ]
    };

    setMessages(prev => [...prev, aiResponse2]);
    setIsTyping(false);

    // Step 5: Show final system confirmation
    await new Promise(resolve => setTimeout(resolve, 3000));
    await simulateFinalSystemUpdates();
  };

  const simulateDocumentProcessing = async () => {
    const agents = [
      { id: '1', name: 'Data Extractor Agent', status: 'running' as const, description: 'Extracting information from marriage certificate', progress: 0 },
      { id: '2', name: 'Policy Agent', status: 'idle' as const, description: 'Checking HR policies and regulations', progress: 0 },
      { id: '3', name: 'Document Validator', status: 'idle' as const, description: 'Validating document authenticity', progress: 0 }
    ];

    // Update reasoning
    const reasoningSteps = [
      {
        id: '1',
        step: 'Document Upload Analysis',
        reasoning: 'User uploaded marriage certificate PDF. Need to validate format, extract key information, and verify authenticity.',
        status: 'active' as const,
        context: ['PDF document received', 'File size: 2.3MB', 'Security scan initiated']
      },
      {
        id: '2',
        step: 'Data Extraction Process',
        reasoning: 'Extract structured data from certificate including names, dates, location, and certificate number.',
        status: 'pending' as const
      },
      {
        id: '3',
        step: 'Policy Compliance Check',
        reasoning: 'Verify compliance with company HR policies and confirm life event eligibility window.',
        status: 'pending' as const
      },
      {
        id: '4',
        step: 'Benefits Impact Analysis',
        reasoning: 'Analyze how marriage affects current benefits and identify available options.',
        status: 'pending' as const
      }
    ];

    onReasoningUpdate(reasoningSteps, "Processing uploaded marriage certificate. Validating document and extracting key information for HR system updates.");

    // Simulate agent progression
    onAgentUpdate(agents);

    // Data Extractor progress
    for (let i = 0; i <= 100; i += 20) {
      await new Promise(resolve => setTimeout(resolve, 800));
      agents[0].progress = i;
      if (i === 100) {
        agents[0].status = 'complete';
        reasoningSteps[0].status = 'complete';
        reasoningSteps[1].status = 'active';
        onReasoningUpdate([...reasoningSteps], "Document validated successfully. Now extracting structured data...");
      }
      onAgentUpdate([...agents]);
    }

    // Policy Agent
    await new Promise(resolve => setTimeout(resolve, 500));
    agents[1].status = 'running';
    reasoningSteps[1].status = 'complete';
    reasoningSteps[2].status = 'active';
    onReasoningUpdate([...reasoningSteps], "Data extraction complete. Checking HR policies and life event eligibility...");

    for (let i = 0; i <= 100; i += 25) {
      await new Promise(resolve => setTimeout(resolve, 600));
      agents[1].progress = i;
      if (i === 100) {
        agents[1].status = 'complete';
        reasoningSteps[2].status = 'complete';
        reasoningSteps[3].status = 'active';
      }
      onAgentUpdate([...agents]);
    }

    // Document Validator
    await new Promise(resolve => setTimeout(resolve, 400));
    agents[2].status = 'running';
    onReasoningUpdate([...reasoningSteps], "Policy check complete. Now analyzing benefits impact and preparing recommendations...");

    for (let i = 0; i <= 100; i += 33) {
      await new Promise(resolve => setTimeout(resolve, 500));
      agents[2].progress = i;
      if (i === 100) {
        agents[2].status = 'complete';
        reasoningSteps[3].status = 'complete';
      }
      onAgentUpdate([...agents]);
    }

    onReasoningUpdate([...reasoningSteps], "All processing complete. Preparing comprehensive response with options and recommendations.");
  };

  const simulateHRSystemUpdates = async () => {
    const hrAgents = [
      { id: 'hr-1', name: 'HR Database Agent', status: 'running' as const, description: 'Updating employee records', progress: 0 },
      { id: 'hr-2', name: 'Benefits System Agent', status: 'idle' as const, description: 'Preparing benefit enrollment options', progress: 0 },
      { id: 'hr-3', name: 'Payroll Integration Agent', status: 'idle' as const, description: 'Flagging tax withholding updates', progress: 0 }
    ];

    const hrReasoningSteps = [
      {
        id: 'hr-1',
        step: 'Update Employee Records',
        reasoning: 'Updating marital status and spouse information in HRIS database.',
        status: 'active' as const,
        context: ['Employee ID: EMP-2847', 'Marital status: Single → Married', 'Spouse: Alex Johnson']
      },
      {
        id: 'hr-2',
        step: 'Benefits Eligibility Update',
        reasoning: 'Activating life event processing and enabling spouse enrollment options.',
        status: 'pending' as const
      },
      {
        id: 'hr-3',
        step: 'System Integrations',
        reasoning: 'Notifying payroll, tax systems, and emergency contact databases.',
        status: 'pending' as const
      }
    ];

    onReasoningUpdate(hrReasoningSteps, "Initiating HR system updates. Modifying employee records and enabling benefit changes...");
    onAgentUpdate(hrAgents);

    // HR Database updates
    for (let i = 0; i <= 100; i += 25) {
      await new Promise(resolve => setTimeout(resolve, 700));
      hrAgents[0].progress = i;
      if (i === 100) {
        hrAgents[0].status = 'complete';
        hrReasoningSteps[0].status = 'complete';
        hrReasoningSteps[1].status = 'active';
        onReasoningUpdate([...hrReasoningSteps], "Employee record updated. Now configuring benefits eligibility...");
      }
      onAgentUpdate([...hrAgents]);
    }

    // Benefits System updates
    await new Promise(resolve => setTimeout(resolve, 500));
    hrAgents[1].status = 'running';
    for (let i = 0; i <= 100; i += 20) {
      await new Promise(resolve => setTimeout(resolve, 600));
      hrAgents[1].progress = i;
      if (i === 100) {
        hrAgents[1].status = 'complete';
        hrReasoningSteps[1].status = 'complete';
        hrReasoningSteps[2].status = 'active';
        onReasoningUpdate([...hrReasoningSteps], "Benefits enrollment activated. Notifying integrated systems...");
      }
      onAgentUpdate([...hrAgents]);
    }

    // Payroll Integration
    await new Promise(resolve => setTimeout(resolve, 400));
    hrAgents[2].status = 'running';
    for (let i = 0; i <= 100; i += 33) {
      await new Promise(resolve => setTimeout(resolve, 500));
      hrAgents[2].progress = i;
      if (i === 100) {
        hrAgents[2].status = 'complete';
        hrReasoningSteps[2].status = 'complete';
      }
      onAgentUpdate([...hrAgents]);
    }

    onReasoningUpdate([...hrReasoningSteps], "HR system updates complete. All integrations successful.");
  };

  const simulateFinalSystemUpdates = async () => {
    const finalAgents = [
      { id: 'final-1', name: 'Notification Agent', status: 'running' as const, description: 'Sending confirmation emails', progress: 0 },
      { id: 'final-2', name: 'Audit Trail Agent', status: 'idle' as const, description: 'Creating compliance records', progress: 0 }
    ];

    const finalSteps = [
      {
        id: 'final-1',
        step: 'User Notifications',
        reasoning: 'Sending confirmation emails and updating user dashboard with next steps.',
        status: 'active' as const,
        context: ['Email confirmation sent', 'Dashboard updated', 'Mobile app notification triggered']
      },
      {
        id: 'final-2',
        step: 'Compliance & Audit',
        reasoning: 'Creating audit trail for compliance and scheduling follow-up reminders.',
        status: 'pending' as const
      }
    ];

    onReasoningUpdate(finalSteps, "Finalizing process. Sending confirmations and creating audit records...");
    onAgentUpdate(finalAgents);

    // Notification Agent
    for (let i = 0; i <= 100; i += 50) {
      await new Promise(resolve => setTimeout(resolve, 800));
      finalAgents[0].progress = i;
      if (i === 100) {
        finalAgents[0].status = 'complete';
        finalSteps[0].status = 'complete';
        finalSteps[1].status = 'active';
      }
      onAgentUpdate([...finalAgents]);
    }

    // Audit Trail Agent
    await new Promise(resolve => setTimeout(resolve, 600));
    finalAgents[1].status = 'running';
    for (let i = 0; i <= 100; i += 25) {
      await new Promise(resolve => setTimeout(resolve, 500));
      finalAgents[1].progress = i;
      if (i === 100) {
        finalAgents[1].status = 'complete';
        finalSteps[1].status = 'complete';
      }
      onAgentUpdate([...finalAgents]);
    }

    onReasoningUpdate([...finalSteps], "Process complete! Marriage certificate successfully processed and all systems updated.");

    // Add final confirmation message
    await new Promise(resolve => setTimeout(resolve, 1000));
    const confirmationMessage: Message = {
      id: 'auto-final',
      type: 'assistant',
      content: `🎉 **Process Complete!** 

Your marriage certificate has been successfully processed and your HR records have been updated. Here's your confirmation summary:

**✅ Actions Completed:**
- Marriage certificate validated and securely stored
- Employee record updated (EMP-2847)
- Life event window activated (23 days remaining)
- Benefits enrollment portal enabled
- Spouse eligibility confirmed
- Payroll systems notified for tax updates

**📧 Confirmations Sent:**
- Email confirmation to your work email
- Benefits enrollment guide attached
- Calendar reminder set for deadline (July 15)
- Mobile app notification sent

**🔄 Next Steps Available:**
You can now proceed with any benefit changes through your employee portal. I'm here to help if you need assistance with the enrollment process or have questions about your options.

Would you like me to help you compare the health insurance options or walk you through updating your beneficiary information?`,
      timestamp: new Date(),
      context: [
        {
          title: "Confirmation Details",
          content: "Transaction ID: TXN-2024-06-MB-1547 | Processed: June 18, 2024 14:32 PST | Status: Complete",
          type: 'data'
        }
      ],
      nextSteps: [
        "Compare health insurance plans and costs",
        "Update life insurance beneficiaries",
        "Review and submit new W-4 form",
        "Schedule benefits consultation call",
        "Update emergency contacts"
      ]
    };

    setMessages(prev => [...prev, confirmationMessage]);
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim() || autoFlowStarted) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content: inputValue,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate AI processing for manual messages
    await simulateDocumentProcessing();

    setTimeout(() => {
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: 'assistant',
        content: `Perfect! I can see you got married recently. Congratulations! 🎉

Based on your marriage certificate information, I've analyzed what needs to be updated in our HR system. Here's what I found and recommend:

**Document Analysis Results:**
- Your marriage certificate appears to be valid and complete
- I've extracted all necessary information for HR records
- The document meets our company's requirements for life event verification

**What This Means for You:**
This marriage qualifies as a "life event" under our benefits policy, which gives you a special opportunity to make changes to your benefits outside of open enrollment. You have 30 days from your marriage date to make these changes.

**Important Considerations:**
I notice this might affect several areas of your employment record. Let me walk you through the implications and options so you can make informed decisions.`,
        timestamp: new Date(),
        agentCalls: [
          { agent: 'Data Extractor Agent', status: 'complete', result: 'Certificate validated, key information extracted' },
          { agent: 'Policy Agent', status: 'complete', result: 'Confirmed 30-day life event window applies' },
          { agent: 'Document Validator', status: 'complete', result: 'Document authentic and compliant' }
        ],
        context: [
          {
            title: "Benefits Impact Analysis",
            content: "Marriage affects health insurance, life insurance beneficiaries, emergency contacts, tax withholdings (W-4), and potentially FSA/HSA contributions.",
            type: 'data'
          },
          {
            title: "Timeline Requirements",
            content: "Changes must be completed within 30 days of marriage date to avoid waiting until next open enrollment period.",
            type: 'policy'
          }
        ],
        tradeOffs: [
          {
            option: "Add spouse to health insurance immediately",
            pros: ["Immediate coverage for spouse", "May be more cost-effective than spouse's employer plan", "Coordinated family coverage"],
            cons: ["Higher premium costs", "May need to compare with spouse's current coverage", "Potential waiting periods for certain services"]
          },
          {
            option: "Keep separate health insurance plans",
            pros: ["Lower individual premium costs", "Maintain existing provider relationships", "Flexibility in coverage choices"],
            cons: ["Potentially higher combined costs", "Coordination of benefits complexity", "Separate deductibles and out-of-pocket maximums"]
          }
        ],
        nextSteps: [
          "Review current benefit elections and costs",
          "Compare spouse's insurance options with ours",
          "Update beneficiary information on life insurance",
          "Submit new W-4 form for tax withholding changes",
          "Update emergency contact information"
        ]
      };

      setMessages(prev => [...prev, assistantMessage]);
      setIsTyping(false);
    }, 2000);
  };

  return (
    <div className="flex flex-col h-full">
      <ScrollArea ref={scrollAreaRef} className="flex-1 p-4">
        <div className="space-y-4 max-w-4xl mx-auto">
          {messages.map((message) => (
            <ChatMessage key={message.id} message={message} />
          ))}
          {isTyping && (
            <div className="flex gap-3">
              <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
                <div className="w-4 h-4 bg-white rounded-full animate-pulse"></div>
              </div>
              <div className="bg-muted p-4 rounded-lg">
                <div className="flex gap-1">
                  <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                  <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                </div>
              </div>
            </div>
          )}
        </div>
      </ScrollArea>

      <div className="border-t p-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex gap-2">
            <div className="relative flex-1">
              <Input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder={autoFlowStarted ? "Demo in progress... Watch the automatic flow!" : "Type your message... (e.g., 'I got married last week and have my marriage certificate ready to upload')"}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                className="pr-12"
                disabled={autoFlowStarted}
              />
              <Button
                size="sm"
                variant="ghost"
                className="absolute right-1 top-1 h-8 w-8 p-0"
              >
                <Paperclip className="w-4 h-4" />
              </Button>
            </div>
            <Button onClick={handleSendMessage} disabled={!inputValue.trim() || autoFlowStarted}>
              <Send className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}