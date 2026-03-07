import type { ComponentType } from 'react';
import type { Concern, Step0Answers } from '../../types/getStarted';
import StopBangScreening from './forms/StopBangScreening';
import CardioAudit from './forms/CardioAudit';
import SleepPatternsAudit from './forms/SleepPatternsAudit';
import PhysiologicalReadinessAudit from './forms/PhysiologicalReadinessAudit';
import FormSubProgress from './FormSubProgress';

interface FormProps {
  onNext: () => void;
  onBack: () => void;
  step0Answers?: Step0Answers;
}

interface Props {
  selectedConcerns: Concern[];
  currentFormIndex: number;
  onNextForm: () => void;
  onPrevForm: () => void;
  step0Answers?: Step0Answers;
}

const FORM_MAP: Record<Concern, ComponentType<FormProps>> = {
  sleep_apnea: StopBangScreening,
  cardio_risk: CardioAudit,
  sleep_analysis: SleepPatternsAudit,
  recovery: PhysiologicalReadinessAudit,
};

export default function Step2Forms({
  selectedConcerns,
  currentFormIndex,
  onNextForm,
  onPrevForm,
  step0Answers,
}: Props) {
  const currentConcern = selectedConcerns[currentFormIndex];
  const FormComponent = FORM_MAP[currentConcern];

  if (!FormComponent) return null;

  return (
    <div className="flex flex-col flex-grow">
      {/* Sub-progress bar for multiple forms */}
      {selectedConcerns.length > 1 && (
        <div className="w-full max-w-5xl mx-auto px-6 pt-4">
          <FormSubProgress
            currentIndex={currentFormIndex}
            totalForms={selectedConcerns.length}
            concerns={selectedConcerns}
          />
        </div>
      )}

      <FormComponent onNext={onNextForm} onBack={onPrevForm} step0Answers={step0Answers} />
    </div>
  );
}
