import { Concern } from '../../types/getStarted';
import StopBangScreening from './forms/StopBangScreening';
import CardioAudit from './forms/CardioAudit';
import SleepPatternsAudit from './forms/SleepPatternsAudit';
import PhysiologicalReadinessAudit from './forms/PhysiologicalReadinessAudit';

interface Props {
  concern: Concern;
  onNext: () => void;
  onBack: () => void;
}

export default function Step2Profile({ concern, onNext, onBack }: Props) {
  if (concern === 'sleep_apnea') return <StopBangScreening onNext={onNext} onBack={onBack} />;
  if (concern === 'cardio_risk') return <CardioAudit onNext={onNext} onBack={onBack} />;
  if (concern === 'sleep_analysis') return <SleepPatternsAudit onNext={onNext} onBack={onBack} />;
  if (concern === 'recovery') return <PhysiologicalReadinessAudit onNext={onNext} onBack={onBack} />;
  return null;
}
