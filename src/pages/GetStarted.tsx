import { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Concern, Beneficiary, Step } from '../types/getStarted';
import StepProgressBar from '../components/get-started/StepProgressBar';
import Step1Needs from '../components/get-started/Step1Needs';
import Step2Profile from '../components/get-started/Step2Profile';
import Step3Plan from '../components/get-started/Step3Plan';

export default function GetStarted() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [step, setStep] = useState<Step>(1);
  const [concern, setConcern] = useState<Concern>('sleep_apnea');
  const [beneficiary, setBeneficiary] = useState<Beneficiary>('myself');

  // Deep-link: read ?concern= from URL on mount
  useEffect(() => {
    const urlConcern = searchParams.get('concern') as Concern | null;
    if (urlConcern && ['sleep_apnea', 'cardio_risk', 'recovery', 'sleep_analysis'].includes(urlConcern)) {
      setConcern(urlConcern);
    }
  }, [searchParams]);

  const handleExit = () => {
    navigate(-1); // go back in history
  };

  return (
    <>
      <Helmet>
        <title>Get Started — Indexo Health | Personalized Health Assessment</title>
        <meta name="description" content="Take our personalized health assessment to find the right Indexo Health monitoring plan for you. Sleep apnea screening, cardiovascular risk, recovery insights, and sleep analysis." />
        <link rel="canonical" href="https://indexo.health/get-started" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://indexo.health/get-started" />
        <meta property="og:title" content="Get Started — Indexo Health | Personalized Health Assessment" />
        <meta property="og:description" content="Take our personalized health assessment to find the right monitoring plan for you." />
        <meta property="og:image" content="https://indexo.health/images/og-home.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Get Started — Indexo Health" />
        <meta name="twitter:description" content="Personalized health assessment for sleep and cardiovascular monitoring." />
      </Helmet>
      <div className="bg-background-app font-display antialiased text-text-main min-h-screen flex flex-col">
        <StepProgressBar step={step} concern={concern} onExit={handleExit} />
        {step === 1 && (
          <Step1Needs
            concern={concern}
            setConcern={setConcern}
            beneficiary={beneficiary}
            setBeneficiary={setBeneficiary}
            onNext={() => setStep(2)}
          />
        )}
        {step === 2 && (
          <Step2Profile
            concern={concern}
            onNext={() => setStep(3)}
            onBack={() => setStep(1)}
          />
        )}
        {step === 3 && (
          <Step3Plan onBack={() => setStep(2)} />
        )}
      </div>
    </>
  );
}
