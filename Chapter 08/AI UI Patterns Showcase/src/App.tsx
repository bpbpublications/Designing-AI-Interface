import { useState } from "react";
import { 
  Card, 
  CardContent, 
  CardHeader, 
  Typography, 
  Container, 
  Grid, 
  List, 
  ListItem, 
  ListItemButton, 
  ListItemText,
  Paper,
  Box,
  createTheme,
  ThemeProvider,
  CssBaseline
} from '@mui/material';
import { ConversationalChatUI } from "./components/patterns/ConversationalChatUI";
import { VoiceAssistantUI } from "./components/patterns/VoiceAssistantUI";
import { SmartReplyUI } from "./components/patterns/SmartReplyUI";
import { GenerativeEditorUI } from "./components/patterns/GenerativeEditorUI";
import { AISidebarUI } from "./components/patterns/AISidebarUI";
import { SummarizationDashboard } from "./components/patterns/SummarizationDashboard";
import { InlineAgentHelpers } from "./components/patterns/InlineAgentHelpers";
import { RecommendationFeed } from "./components/patterns/RecommendationFeed";
import { AIBrainstormingCanvas } from "./components/patterns/AIBrainstormingCanvas";
import { MultiAgentChatroom } from "./components/patterns/MultiAgentChatroom";
import { AgentActionDashboard } from "./components/patterns/AgentActionDashboard";
import { RiskTrustScorePanel } from "./components/patterns/RiskTrustScorePanel";
import { InteractiveSimulation } from "./components/patterns/InteractiveSimulation";
import { ARVRAdaptiveUI } from "./components/patterns/ARVRAdaptiveUI";
import { AutonomousWorkflowOrchestrator } from "./components/patterns/AutonomousWorkflowOrchestrator";
import { HumanInTheLoopReviewConsole } from "./components/patterns/HumanInTheLoopReviewConsole";
import { ExplainabilityTransparencyUI } from "./components/patterns/ExplainabilityTransparencyUI";
import { AccessibilityFocusedAIUI } from "./components/patterns/AccessibilityFocusedAIUI";
import { GovernanceComplianceUI } from "./components/patterns/GovernanceComplianceUI";
import { MultiDraftView } from "./components/patterns/MultiDraftView";
import { InlineRationale } from "./components/patterns/InlineRationale";
import { PreferenceMemory } from "./components/patterns/PreferenceMemory";
import { FeedbackWidget } from "./components/patterns/FeedbackWidget";
import { SuggestionAutocomplete } from "./components/patterns/SuggestionAutocomplete";
import { ContentPreviewRefinement } from "./components/patterns/ContentPreviewRefinement";
import { StyleToneControlPanel } from "./components/patterns/StyleToneControlPanel";
import { MultiModalGeneration } from "./components/patterns/MultiModalGeneration";
import { ProgressiveDisclosureConfidence } from "./components/patterns/ProgressiveDisclosureConfidence";
import { StepByStepTracePanel } from "./components/patterns/StepByStepTracePanel";
import { ConfirmationCheckpoint } from "./components/patterns/ConfirmationCheckpoint";
import { SafeToFailDefault } from "./components/patterns/SafeToFailDefault";
import { AutonomySlider } from "./components/patterns/AutonomySlider";
import { InterruptPauseControl } from "./components/patterns/InterruptPauseControl";
import { UndoRollback } from "./components/patterns/UndoRollback";
import { TransparentStatusIndicator } from "./components/patterns/TransparentStatusIndicator";
import { AuditTrail } from "./components/patterns/AuditTrail";
import { EscalationToHuman } from "./components/patterns/EscalationToHuman";
import { ReplayMode } from "./components/patterns/ReplayMode";
import { GenAISandboxPromptBox } from "./components/patterns/GenAISandboxPromptBox";
import { GenAIIterationPreview } from "./components/patterns/GenAIIterationPreview";
import { AgenticTaskFlow } from "./components/patterns/AgenticTaskFlow";
import { BlendedFlowDraftExecution } from "./components/patterns/BlendedFlowDraftExecution";
import { HandoffIndicator } from "./components/patterns/HandoffIndicator";
import { RuleEnforcementBanner } from "./components/patterns/RuleEnforcementBanner";
import { DualViewPanel } from "./components/patterns/DualViewPanel";
import { SimulationSandbox } from "./components/patterns/SimulationSandbox";
import { ExecutionBuffer } from "./components/patterns/ExecutionBuffer";
import { RoleSwitcher } from "./components/patterns/RoleSwitcher";
import { KillSwitch } from "./components/patterns/KillSwitch";
import { EmergencyPause } from "./components/patterns/EmergencyPause";
import { ConfidenceWarning } from "./components/patterns/ConfidenceWarning";
import { HumanInTheLoopAlert } from "./components/patterns/HumanInTheLoopAlert";
import { SafeDefaultMode } from "./components/patterns/SafeDefaultMode";
import { OverridePanel } from "./components/patterns/OverridePanel";
import { RecoveryLog } from "./components/patterns/RecoveryLog";
import { ErrorStateWithOptions } from "./components/patterns/ErrorStateWithOptions";
import { GenAIPromptBoxSuggestions } from "./components/patterns/GenAIPromptBoxSuggestions";
import { AgenticGoalDeclaration } from "./components/patterns/AgenticGoalDeclaration";
import { GenAIMultiModalSwitch } from "./components/patterns/GenAIMultiModalSwitch";
import { AgenticStepPreviewPanel } from "./components/patterns/AgenticStepPreviewPanel";
import { GenAIRegenerateEditLoop } from "./components/patterns/GenAIRegenerateEditLoop";
import { AgenticConfirmCheckpoint } from "./components/patterns/AgenticConfirmCheckpoint";
import { GenAIInlineRationale } from "./components/patterns/GenAIInlineRationale";
import { AgenticTraceableLog } from "./components/patterns/AgenticTraceableLog";
import { GenAIContentFilterAlert } from "./components/patterns/GenAIContentFilterAlert";
import { AgenticKillSwitchAdvanced } from "./components/patterns/AgenticKillSwitchAdvanced";
import { GenAISidebarCompanion } from "./components/patterns/GenAISidebarCompanion";
import { AgenticPolicyAwareExecution } from "./components/patterns/AgenticPolicyAwareExecution";
import { GenAIMultiDraftComparison } from "./components/patterns/GenAIMultiDraftComparison";
import { AgenticExecutionQueue } from "./components/patterns/AgenticExecutionQueue";
import { GenAIStylePreferences } from "./components/patterns/GenAIStylePreferences";
import { AgenticUserRoleModes } from "./components/patterns/AgenticUserRoleModes";
import { GenAISharedCanvas } from "./components/patterns/GenAISharedCanvas";
import { AgenticMultiAgentCollaboration } from "./components/patterns/AgenticMultiAgentCollaboration";
import { GenAIInlineWarning } from "./components/patterns/GenAIInlineWarning";
import { AgenticFallbackFlow } from "./components/patterns/AgenticFallbackFlow";
import { GenAIFeedbackWidget } from "./components/patterns/GenAIFeedbackWidget";
import { AgenticPerformanceReviewLog } from "./components/patterns/AgenticPerformanceReviewLog";
import { GenAIDraftTimer } from "./components/patterns/GenAIDraftTimer";
import { AgenticExecutionTimeline } from "./components/patterns/AgenticExecutionTimeline";
import { GenAIConfidenceBar } from "./components/patterns/GenAIConfidenceBar";
import { AgenticAuditDashboard } from "./components/patterns/AgenticAuditDashboard";
import { GenAIExportOptions } from "./components/patterns/GenAIExportOptions";
import { AgenticCrossAppAgent } from "./components/patterns/AgenticCrossAppAgent";
import { GenAIVoiceFirstInput } from "./components/patterns/GenAIVoiceFirstInput";
import { AgenticAccessibleOverrides } from "./components/patterns/AgenticAccessibleOverrides";
import { GenAIToAgenticFlow } from "./components/patterns/GenAIToAgenticFlow";
import { AgenticToGenAIFlow } from "./components/patterns/AgenticToGenAIFlow";
import { GenAIHighlightedChanges } from "./components/patterns/GenAIHighlightedChanges";
import { AgenticExecutionMap } from "./components/patterns/AgenticExecutionMap";
import { GenAIUndoDraft } from "./components/patterns/GenAIUndoDraft";
import { AgenticRollbackLog } from "./components/patterns/AgenticRollbackLog";
import { GenAICreativeNudges } from "./components/patterns/GenAICreativeNudges";
import { AgenticProgressMilestone } from "./components/patterns/AgenticProgressMilestone";
import { GenAIAISelfDisclosure } from "./components/patterns/GenAIAISelfDisclosure";
import { AgenticAgentStateIndicator } from "./components/patterns/AgenticAgentStateIndicator";
import { InlineRewriteButtons } from "./components/patterns/InlineRewriteButtons";
import { ContextualHoverMenu } from "./components/patterns/ContextualHoverMenu";
import { RightClickAIMenu } from "./components/patterns/RightClickAIMenu";
import { DraftSidebarWithVariations } from "./components/patterns/DraftSidebarWithVariations";
import { MicroEditsWordPhraseSubstitution } from "./components/patterns/MicroEditsWordPhraseSubstitution";
import { ExpandCondenseControls } from "./components/patterns/ExpandCondenseControls";
import { SideBySideDraftComparison } from "./components/patterns/SideBySideDraftComparison";
import { AcceptRejectInlineSuggestions } from "./components/patterns/AcceptRejectInlineSuggestions";
import { HistoryRollback } from "./components/patterns/HistoryRollback";
import { DraftPreviewWindow } from "./components/patterns/DraftPreviewWindow";
import { RegenerateButton } from "./components/patterns/RegenerateButton";
import { SideBySideVariations } from "./components/patterns/SideBySideVariations";
import { OneClickRefinement } from "./components/patterns/OneClickRefinement";
import { HighlightImprove } from "./components/patterns/HighlightImprove";
import { VersionHistoryAdvanced } from "./components/patterns/VersionHistoryAdvanced";
import { BlendedDrafts } from "./components/patterns/BlendedDrafts";
import { PreviewWithConfidenceIndicators } from "./components/patterns/PreviewWithConfidenceIndicators";
import { ProgressiveDrafting } from "./components/patterns/ProgressiveDrafting";
import { FeedbackDrivenRefinement } from "./components/patterns/FeedbackDrivenRefinement";
import { ToneSwitcher } from "./components/patterns/ToneSwitcher";
import { StylePresets } from "./components/patterns/StylePresets";
import { AdjustableSliders } from "./components/patterns/AdjustableSliders";
import { QuickToggleButtons } from "./components/patterns/QuickToggleButtons";
import { AudienceSelector } from "./components/patterns/AudienceSelector";
import { VoiceProfiles } from "./components/patterns/VoiceProfiles";
import { InlineStyleControls } from "./components/patterns/InlineStyleControls";
import { StyleTemplates } from "./components/patterns/StyleTemplates";
import { BlendedStyleMixer } from "./components/patterns/BlendedStyleMixer";
import { PreviewBeforeApply } from "./components/patterns/PreviewBeforeApply";
import { ModeSwitchTabs } from "./components/patterns/ModeSwitchTabs";
import { UnifiedPromptBox } from "./components/patterns/UnifiedPromptBox";
import { MultiPreviewPanel } from "./components/patterns/MultiPreviewPanel";
import { DragDropConversion } from "./components/patterns/DragDropConversion";
import { LinkedOutputs } from "./components/patterns/LinkedOutputs";
import { ModeCyclingShortcut } from "./components/patterns/ModeCyclingShortcut";
import { SideBySideOutputs } from "./components/patterns/SideBySideOutputs";
import { CrossModeRefinement } from "./components/patterns/CrossModeRefinement";
import { ExportOptions } from "./components/patterns/ExportOptions";
import { MixedMediaCanvas } from "./components/patterns/MixedMediaCanvas";
import { MultiDraftViewVersionHistory } from "./components/patterns/MultiDraftViewVersionHistory";
import { InlineRationaleTopFactors } from "./components/patterns/InlineRationaleTopFactors";
import { PreferenceMemoryQuickStyle } from "./components/patterns/PreferenceMemoryQuickStyle";
import { FeedbackWidgetsCorrection } from "./components/patterns/FeedbackWidgetsCorrection";
import { ContextualSidebarsCopilot } from "./components/patterns/ContextualSidebarsCopilot";
import { ExplorationSandboxes } from "./components/patterns/ExplorationSandboxes";
import { OutputHighlightingAIMarkers } from "./components/patterns/OutputHighlightingAIMarkers";
import { AdaptiveToneDomainAware } from "./components/patterns/AdaptiveToneDomainAware";
import { GamificationEngagementNudges } from "./components/patterns/GamificationEngagementNudges";
import { StepByStepTracePanelsAgentic } from "./components/patterns/StepByStepTracePanelsAgentic";
import { ConfirmationCheckpointsAgentic } from "./components/patterns/ConfirmationCheckpointsAgentic";
import { SafeToFailDefaultsAgentic } from "./components/patterns/SafeToFailDefaultsAgentic";
import { AutonomySlidersRoleModes } from "./components/patterns/AutonomySlidersRoleModes";
import { InterruptPauseUndoControlsAgentic } from "./components/patterns/InterruptPauseUndoControlsAgentic";
import { AuditTrailsReplayLogsAgentic } from "./components/patterns/AuditTrailsReplayLogsAgentic";
import { TransparentStatusIndicatorsAgentic } from "./components/patterns/TransparentStatusIndicatorsAgentic";
import { EscalationToHumanInTheLoopAgentic } from "./components/patterns/EscalationToHumanInTheLoopAgentic";
import { PolicyAwareExecutionAgentic } from "./components/patterns/PolicyAwareExecutionAgentic";
import { ExecutionQueuesTaskBundling } from "./components/patterns/ExecutionQueuesTaskBundling";
import { SimulationWhatIfScenariosAgentic } from "./components/patterns/SimulationWhatIfScenariosAgentic";
import { RollbackRecoveryLogsAgentic } from "./components/patterns/RollbackRecoveryLogsAgentic";
import { TrustBadgesComplianceDashboards } from "./components/patterns/TrustBadgesComplianceDashboards";
import { CrossAppAgentsOrchestration } from "./components/patterns/CrossAppAgentsOrchestration";
import { ErrorHandlingFallbackFlows } from "./components/patterns/ErrorHandlingFallbackFlows";

interface Pattern {
  id: string;
  name: string;
  component: React.ComponentType;
}

const patterns: Pattern[] = [
  { id: "conversational-chat", name: "Conversational Chat UI", component: ConversationalChatUI },
  { id: "voice-assistant", name: "Voice Assistant UI", component: VoiceAssistantUI },
  { id: "smart-reply", name: "Smart Reply / Autocomplete UI", component: SmartReplyUI },
  { id: "generative-editor", name: "Generative Editor UI", component: GenerativeEditorUI },
  { id: "ai-sidebar", name: "AI Sidebar / Companion Panel", component: AISidebarUI },
  { id: "summarization-dashboard", name: "Summarization Dashboard", component: SummarizationDashboard },
  { id: "inline-agent-helpers", name: "Inline Agent Helpers", component: InlineAgentHelpers },
  { id: "recommendation-feed", name: "Recommendation Feed", component: RecommendationFeed },
  { id: "ai-brainstorming", name: "AI Brainstorming Canvas", component: AIBrainstormingCanvas },
  { id: "multi-agent-chatroom", name: "Multi-Agent Chatroom UI", component: MultiAgentChatroom },
  { id: "agent-action-dashboard", name: "Agent Action Dashboard", component: AgentActionDashboard },
  { id: "risk-trust-score", name: "Risk/Trust Score Panel", component: RiskTrustScorePanel },
  { id: "interactive-simulation", name: "Interactive Simulation Sandbox", component: InteractiveSimulation },
  { id: "arvr-adaptive", name: "AR/VR Adaptive Environment UI", component: ARVRAdaptiveUI },
  { id: "autonomous-workflow", name: "Autonomous Workflow Orchestrator", component: AutonomousWorkflowOrchestrator },
  { id: "human-in-loop", name: "Human-in-the-Loop Review Console", component: HumanInTheLoopReviewConsole },
  { id: "explainability-transparency", name: "Explainability/Transparency UI", component: ExplainabilityTransparencyUI },
  { id: "accessibility-focused", name: "Accessibility-Focused AI UI", component: AccessibilityFocusedAIUI },
  { id: "governance-compliance", name: "Governance & Compliance UI", component: GovernanceComplianceUI },
  { id: "multi-draft-view", name: "Multi-Draft View", component: MultiDraftView },
  { id: "inline-rationale", name: "Inline Rationale", component: InlineRationale },
  { id: "preference-memory", name: "Preference Memory", component: PreferenceMemory },
  { id: "feedback-widget", name: "Feedback Widget", component: FeedbackWidget },
  { id: "suggestion-autocomplete", name: "Suggestion & Autocomplete", component: SuggestionAutocomplete },
  { id: "content-preview-refinement", name: "Content Preview & Refinement Loops", component: ContentPreviewRefinement },
  { id: "style-tone-control", name: "Style/Tone Control Panel", component: StyleToneControlPanel },
  { id: "multi-modal-generation", name: "Multi-Modal Generation", component: MultiModalGeneration },
  { id: "progressive-disclosure-confidence", name: "Progressive Disclosure of Confidence", component: ProgressiveDisclosureConfidence },
  { id: "step-by-step-trace", name: "Step-by-Step Trace Panel", component: StepByStepTracePanel },
  { id: "confirmation-checkpoint", name: "Confirmation Checkpoint", component: ConfirmationCheckpoint },
  { id: "safe-to-fail-default", name: "Safe-to-Fail Default", component: SafeToFailDefault },
  { id: "autonomy-slider", name: "Autonomy Slider", component: AutonomySlider },
  { id: "interrupt-pause-control", name: "Interrupt/Pause Control", component: InterruptPauseControl },
  { id: "undo-rollback", name: "Undo/Rollback", component: UndoRollback },
  { id: "transparent-status-indicator", name: "Transparent Status Indicator", component: TransparentStatusIndicator },
  { id: "audit-trail", name: "Audit Trail", component: AuditTrail },
  { id: "escalation-to-human", name: "Escalation to Human", component: EscalationToHuman },
  { id: "replay-mode", name: "Replay Mode", component: ReplayMode },
  { id: "genai-sandbox-prompt", name: "GenAI Sandbox Prompt Box", component: GenAISandboxPromptBox },
  { id: "genai-iteration-preview", name: "GenAI Iteration Preview", component: GenAIIterationPreview },
  { id: "agentic-task-flow", name: "Agentic Task Flow", component: AgenticTaskFlow },
  { id: "blended-flow-draft-execution", name: "Blended Flow: Draft → Execution", component: BlendedFlowDraftExecution },
  { id: "handoff-indicator", name: "Handoff Indicator", component: HandoffIndicator },
  { id: "rule-enforcement-banner", name: "Rule Enforcement Banner", component: RuleEnforcementBanner },
  { id: "dual-view-panel", name: "Dual View Panel", component: DualViewPanel },
  { id: "simulation-sandbox", name: "Simulation Sandbox", component: SimulationSandbox },
  { id: "execution-buffer", name: "Execution Buffer", component: ExecutionBuffer },
  { id: "role-switcher", name: "Role Switcher", component: RoleSwitcher },
  { id: "kill-switch", name: "Kill Switch", component: KillSwitch },
  { id: "emergency-pause", name: "Emergency Pause", component: EmergencyPause },
  { id: "confidence-warning", name: "Confidence Warning", component: ConfidenceWarning },
  { id: "human-in-the-loop-alert", name: "Human-in-the-Loop Alert", component: HumanInTheLoopAlert },
  { id: "safe-default-mode", name: "Safe Default Mode", component: SafeDefaultMode },
  { id: "override-panel", name: "Override Panel", component: OverridePanel },
  { id: "recovery-log", name: "Recovery Log", component: RecoveryLog },
  { id: "error-state-with-options", name: "Error State with Options", component: ErrorStateWithOptions },
  { id: "genai-prompt-box-suggestions", name: "GenAI - Prompt Box/Suggestions", component: GenAIPromptBoxSuggestions },
  { id: "agentic-goal-declaration", name: "Agentic - Goal Declaration/Task Template", component: AgenticGoalDeclaration },
  { id: "genai-multi-modal-switch", name: "GenAI - Multi-Modal Switch", component: GenAIMultiModalSwitch },
  { id: "agentic-step-preview-panel", name: "Agentic - Step Preview Panel", component: AgenticStepPreviewPanel },
  { id: "genai-regenerate-edit-loop", name: "GenAI - Regenerate/Edit Loop", component: GenAIRegenerateEditLoop },
  { id: "agentic-confirm-checkpoint", name: "Agentic - Confirm Checkpoint", component: AgenticConfirmCheckpoint },
  { id: "genai-inline-rationale", name: "GenAI - Inline Rationale", component: GenAIInlineRationale },
  { id: "agentic-traceable-log", name: "Agentic - Traceable Log", component: AgenticTraceableLog },
  { id: "genai-content-filter-alert", name: "GenAI - Content Filter Alert", component: GenAIContentFilterAlert },
  { id: "agentic-kill-switch-advanced", name: "Agentic - Kill Switch", component: AgenticKillSwitchAdvanced },
  { id: "genai-sidebar-companion", name: "GenAI - Sidebar Companion", component: GenAISidebarCompanion },
  { id: "agentic-policy-aware-execution", name: "Agentic - Policy-Aware Execution", component: AgenticPolicyAwareExecution },
  { id: "genai-multi-draft-comparison", name: "GenAI - Multi-Draft Comparison", component: GenAIMultiDraftComparison },
  { id: "agentic-execution-queue", name: "Agentic - Execution Queue", component: AgenticExecutionQueue },
  { id: "genai-style-preferences", name: "GenAI - Style Preferences", component: GenAIStylePreferences },
  { id: "agentic-user-role-modes", name: "Agentic - User Role Modes", component: AgenticUserRoleModes },
  { id: "genai-shared-canvas", name: "GenAI - Shared Canvas", component: GenAISharedCanvas },
  { id: "agentic-multi-agent-collaboration", name: "Agentic - Multi-Agent Collaboration", component: AgenticMultiAgentCollaboration },
  { id: "genai-inline-warning", name: "GenAI - Inline Warning", component: GenAIInlineWarning },
  { id: "agentic-fallback-flow", name: "Agentic - Fallback Flow", component: AgenticFallbackFlow },
  { id: "genai-feedback-widget-new", name: "GenAI - Feedback Widget", component: GenAIFeedbackWidget },
  { id: "agentic-performance-review-log", name: "Agentic - Performance Review Log", component: AgenticPerformanceReviewLog },
  { id: "genai-draft-timer", name: "GenAI - Draft Timer", component: GenAIDraftTimer },
  { id: "agentic-execution-timeline", name: "Agentic - Execution Timeline", component: AgenticExecutionTimeline },
  { id: "genai-confidence-bar", name: "GenAI - Confidence Bar", component: GenAIConfidenceBar },
  { id: "agentic-audit-dashboard", name: "Agentic - Audit Dashboard", component: AgenticAuditDashboard },
  { id: "genai-export-options", name: "GenAI - Export Options", component: GenAIExportOptions },
  { id: "agentic-cross-app-agent", name: "Agentic - Cross-App Agent", component: AgenticCrossAppAgent },
  { id: "genai-voice-first-input", name: "GenAI - Voice First Input", component: GenAIVoiceFirstInput },
  { id: "agentic-accessible-overrides", name: "Agentic - Accessible Overrides", component: AgenticAccessibleOverrides },
  { id: "genai-to-agentic-flow", name: "GenAI → Agentic Flow", component: GenAIToAgenticFlow },
  { id: "agentic-to-genai-flow", name: "Agentic → GenAI Flow", component: AgenticToGenAIFlow },
  { id: "genai-highlighted-changes", name: "GenAI - Highlighted Changes", component: GenAIHighlightedChanges },
  { id: "agentic-execution-map", name: "Agentic - Execution Map", component: AgenticExecutionMap },
  { id: "genai-undo-draft", name: "GenAI - Undo Draft", component: GenAIUndoDraft },
  { id: "agentic-rollback-log", name: "Agentic - Rollback Log", component: AgenticRollbackLog },
  { id: "genai-creative-nudges", name: "GenAI - Creative Nudges", component: GenAICreativeNudges },
  { id: "agentic-progress-milestone", name: "Agentic - Progress Milestone", component: AgenticProgressMilestone },
  { id: "genai-ai-self-disclosure", name: "GenAI - AI Self-Disclosure", component: GenAIAISelfDisclosure },
  { id: "agentic-agent-state-indicator", name: "Agentic - Agent State Indicator", component: AgenticAgentStateIndicator },
  { id: "inline-rewrite-buttons", name: "Inline Rewrite Buttons", component: InlineRewriteButtons },
  { id: "contextual-hover-menu", name: "Contextual Hover Menu", component: ContextualHoverMenu },
  { id: "right-click-ai-menu", name: "Right-Click AI Menu", component: RightClickAIMenu },
  { id: "draft-sidebar-variations", name: "Draft Sidebar with Variations", component: DraftSidebarWithVariations },
  { id: "micro-edits-substitution", name: "Micro-Edits (Word/Phrase Substitution)", component: MicroEditsWordPhraseSubstitution },
  { id: "expand-condense-controls", name: "Expand / Condense Controls", component: ExpandCondenseControls },
  { id: "side-by-side-draft-comparison", name: "Side-by-Side Draft Comparison", component: SideBySideDraftComparison },
  { id: "accept-reject-inline-suggestions", name: "Accept / Reject Inline Suggestions", component: AcceptRejectInlineSuggestions },
  { id: "history-rollback", name: "History & Rollback", component: HistoryRollback },
  { id: "draft-preview-window", name: "Draft Preview Window", component: DraftPreviewWindow },
  { id: "regenerate-button", name: "Regenerate Button", component: RegenerateButton },
  { id: "side-by-side-variations", name: "Side-by-Side Variations", component: SideBySideVariations },
  { id: "one-click-refinement", name: "One-Click Refinement", component: OneClickRefinement },
  { id: "highlight-improve", name: "Highlight + Improve", component: HighlightImprove },
  { id: "version-history-advanced", name: "Version History", component: VersionHistoryAdvanced },
  { id: "blended-drafts", name: "Blended Drafts", component: BlendedDrafts },
  { id: "preview-with-confidence-indicators", name: "Preview with Confidence Indicators", component: PreviewWithConfidenceIndicators },
  { id: "progressive-drafting", name: "Progressive Drafting", component: ProgressiveDrafting },
  { id: "feedback-driven-refinement", name: "Feedback-Driven Refinement", component: FeedbackDrivenRefinement },
  { id: "tone-switcher", name: "Tone Switcher", component: ToneSwitcher },
  { id: "style-presets", name: "Style Presets", component: StylePresets },
  { id: "adjustable-sliders", name: "Adjustable Sliders", component: AdjustableSliders },
  { id: "quick-toggle-buttons", name: "Quick Toggle Buttons", component: QuickToggleButtons },
  { id: "audience-selector", name: "Audience Selector", component: AudienceSelector },
  { id: "voice-profiles", name: "Voice Profiles", component: VoiceProfiles },
  { id: "inline-style-controls", name: "Inline Style Controls", component: InlineStyleControls },
  { id: "style-templates", name: "Style Templates", component: StyleTemplates },
  { id: "blended-style-mixer", name: "Blended Style Mixer", component: BlendedStyleMixer },
  { id: "preview-before-apply", name: "Preview Before Apply", component: PreviewBeforeApply },
  { id: "mode-switch-tabs", name: "Mode Switch Tabs", component: ModeSwitchTabs },
  { id: "unified-prompt-box", name: "Unified Prompt Box", component: UnifiedPromptBox },
  { id: "multi-preview-panel", name: "Multi-Preview Panel", component: MultiPreviewPanel },
  { id: "drag-drop-conversion", name: "Drag-and-Drop Conversion", component: DragDropConversion },
  { id: "linked-outputs", name: "Linked Outputs", component: LinkedOutputs },
  { id: "mode-cycling-shortcut", name: "Mode Cycling Shortcut", component: ModeCyclingShortcut },
  { id: "side-by-side-outputs", name: "Side-by-Side Outputs", component: SideBySideOutputs },
  { id: "cross-mode-refinement", name: "Cross-Mode Refinement", component: CrossModeRefinement },
  { id: "export-options", name: "Export Options", component: ExportOptions },
  { id: "mixed-media-canvas", name: "Mixed Media Canvas", component: MixedMediaCanvas },
  { id: "multi-draft-view-version-history", name: "Multi-Draft View & Version History", component: MultiDraftViewVersionHistory },
  { id: "inline-rationale-top-factors", name: "Inline Rationale & Top Factors Display", component: InlineRationaleTopFactors },
  { id: "preference-memory-quick-style", name: "Preference Memory & Quick Style Buttons", component: PreferenceMemoryQuickStyle },
  { id: "feedback-widgets-correction", name: "Feedback Widgets & Correction Capture", component: FeedbackWidgetsCorrection },
  { id: "contextual-sidebars-copilot", name: "Contextual Sidebars / Copilot Panels", component: ContextualSidebarsCopilot },
  { id: "exploration-sandboxes", name: "Exploration Sandboxes (low-stakes drafts)", component: ExplorationSandboxes },
  { id: "output-highlighting-ai-markers", name: "Output Highlighting / AI Source Markers", component: OutputHighlightingAIMarkers },
  { id: "adaptive-tone-domain-aware", name: "Adaptive Tone / Domain-Aware Generation", component: AdaptiveToneDomainAware },
  { id: "gamification-engagement-nudges", name: "Gamification & Engagement Nudges", component: GamificationEngagementNudges },
  { id: "step-by-step-trace-panels-agentic", name: "Step-by-Step Trace Panels", component: StepByStepTracePanelsAgentic },
  { id: "confirmation-checkpoints-agentic", name: "Confirmation Checkpoints", component: ConfirmationCheckpointsAgentic },
  { id: "safe-to-fail-defaults-agentic", name: "Safe-to-Fail Defaults", component: SafeToFailDefaultsAgentic },
  { id: "autonomy-sliders-role-modes", name: "Autonomy Sliders & Role Modes", component: AutonomySlidersRoleModes },
  { id: "interrupt-pause-undo-controls-agentic", name: "Interrupt / Pause / Undo Controls", component: InterruptPauseUndoControlsAgentic },
  { id: "audit-trails-replay-logs-agentic", name: "Audit Trails & Replay Logs", component: AuditTrailsReplayLogsAgentic },
  { id: "transparent-status-indicators-agentic", name: "Transparent Status Indicators", component: TransparentStatusIndicatorsAgentic },
  { id: "escalation-to-human-in-the-loop-agentic", name: "Escalation to Human-in-the-Loop", component: EscalationToHumanInTheLoopAgentic },
  { id: "policy-aware-execution-agentic", name: "Policy-Aware Execution", component: PolicyAwareExecutionAgentic },
  { id: "execution-queues-task-bundling", name: "Execution Queues & Task Bundling", component: ExecutionQueuesTaskBundling },
  { id: "simulation-what-if-scenarios-agentic", name: "Simulation & What-if Scenarios", component: SimulationWhatIfScenariosAgentic },
  { id: "rollback-recovery-logs-agentic", name: "Rollback & Recovery Logs", component: RollbackRecoveryLogsAgentic },
  { id: "trust-badges-compliance-dashboards", name: "Trust Badges & Compliance Dashboards", component: TrustBadgesComplianceDashboards },
  { id: "cross-app-agents-orchestration", name: "Cross-App Agents / Orchestration Consoles", component: CrossAppAgentsOrchestration },
  { id: "error-handling-fallback-flows", name: "Error Handling & Fallback Flows", component: ErrorHandlingFallbackFlows },
];

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  },
  shape: {
    borderRadius: 8,
  },
});

export default function App() {
  const [selectedPattern, setSelectedPattern] = useState<string>(patterns[0].id);
  
  const currentPattern = patterns.find(p => p.id === selectedPattern);
  const PatternComponent = currentPattern?.component;

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ 
        height: '100vh', 
        bgcolor: 'grey.50',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden'
      }}>
        <Container maxWidth="xl" sx={{ 
          py: 2, 
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden'
        }}>
          <Box sx={{ mb: 2, flexShrink: 0 }}>
            <Typography variant="h4" component="h1" gutterBottom>
              AI UI Patterns Showcase
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Explore interactive examples of common AI user interface patterns and components.
            </Typography>
          </Box>
          
          <Grid container spacing={3} sx={{ 
            flex: 1,
            height: 'calc(100vh - 140px)',
            overflow: 'hidden'
          }}>
            {/* Left Column - Pattern List */}
            <Grid item xs={12} lg={4} sx={{ height: '100%' }}>
              <Card sx={{ 
                height: '100%',
                display: 'flex',
                flexDirection: 'column'
              }}>
                <CardHeader sx={{ flexShrink: 0, pb: 1 }}>
                  <Typography variant="h6" component="h2">
                    UI Patterns ({patterns.length})
                  </Typography>
                </CardHeader>
                <CardContent sx={{ 
                  p: 0, 
                  flex: 1,
                  overflow: 'hidden',
                  '&:last-child': { pb: 0 }
                }}>
                  <Box sx={{ height: '100%', overflow: 'auto' }}>
                    <List sx={{ p: 1 }}>
                      {patterns.map((pattern) => (
                        <ListItem key={pattern.id} disablePadding sx={{ mb: 0.5 }}>
                          <ListItemButton
                            onClick={() => setSelectedPattern(pattern.id)}
                            selected={selectedPattern === pattern.id}
                            sx={{ 
                              borderRadius: 1,
                              py: 1,
                              '&.Mui-selected': {
                                bgcolor: 'primary.main',
                                color: 'primary.contrastText',
                                '&:hover': {
                                  bgcolor: 'primary.dark',
                                }
                              }
                            }}
                          >
                            <ListItemText 
                              primary={pattern.name}
                              primaryTypographyProps={{
                                variant: 'body2',
                                sx: { lineHeight: 1.3 }
                              }}
                            />
                          </ListItemButton>
                        </ListItem>
                      ))}
                    </List>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
            
            {/* Right Column - Pattern Display */}
            <Grid item xs={12} lg={8} sx={{ height: '100%' }}>
              <Card sx={{ 
                height: '100%',
                display: 'flex',
                flexDirection: 'column'
              }}>
                <CardHeader sx={{ flexShrink: 0, pb: 1 }}>
                  <Typography variant="h6" component="h2">
                    {currentPattern?.name}
                  </Typography>
                </CardHeader>
                <CardContent sx={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  flex: 1,
                  overflow: 'auto',
                  '&:last-child': { pb: 2 }
                }}>
                  {PatternComponent && <PatternComponent />}
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </ThemeProvider>
  );
}