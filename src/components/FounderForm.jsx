import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from './ui/button';
import { Textarea } from './ui/textarea';
import { useToast } from './ui/use-toast';
import { auth } from '../firebase';
import { getFirestore, doc, setDoc } from 'firebase/firestore';

export function FounderForm() {
  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState({
    personalExperience: '',
    problemSolving: '',
    uniqueSolution: '',
    validation: '',
    fundingUse: '',
    noFundingPlan: '',
    futureVision: ''
  });
  const navigate = useNavigate();
  const { toast } = useToast();
  const db = getFirestore();

  const questions = [
    {
      id: 'personalExperience',
      question: 'What personal experience led you to start this venture?'
    },
    {
      id: 'problemSolving',
      question: 'What exact problem are you solving?'
    },
    {
      id: 'uniqueSolution',
      question: 'Why do you believe your solution is better or different from existing ones?'
    },
    {
      id: 'validation',
      question: 'What have you done so far to validate or test your idea?'
    },
    {
      id: 'fundingUse',
      question: 'If you receive funding today, how will you use it in the first 30 days?'
    },
    {
      id: 'noFundingPlan',
      question: 'If you fail to get funding, will you still pursue this idea? Why or why not?'
    },
    {
      id: 'futureVision',
      question: 'Where do you see your startup 3 years from now, and what impact do you hope to create?'
    }
  ];

  const handleAnswerChange = (questionId, value) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: value
    }));
  };

  const handleSubmit = async () => {
    try {
      const userId = auth.currentUser.uid;
      await setDoc(doc(db, 'users', userId), {
        ...answers,
        updatedAt: new Date().toISOString(),
        userId: userId,
        email: auth.currentUser.email,
        displayName: auth.currentUser.displayName
      });
      
      toast({
        title: 'Success',
        description: 'Your responses have been saved successfully!'
      });
      navigate('/dashboard');
    } catch (error) {
      toast({
        title: 'Error',
        description: error.message,
        variant: 'destructive'
      });
    }
  };

  const currentQuestion = questions[step - 1];

  return (
    <div className="max-w-2xl mx-auto p-6">
      <div className="mb-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">Founder Questionnaire</h2>
          <span className="text-sm text-muted-foreground">
            Step {step} of {questions.length}
          </span>
        </div>
        <div className="h-2 bg-secondary/20 rounded-full">
          <div
            className="h-full bg-primary rounded-full transition-all duration-300"
            style={{ width: `${(step / questions.length) * 100}%` }}
          />
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-medium">{currentQuestion.question}</h3>
        <Textarea
          value={answers[currentQuestion.id]}
          onChange={(e) => handleAnswerChange(currentQuestion.id, e.target.value)}
          placeholder="Type your answer here..."
          className="min-h-[150px]"
        />

        <div className="flex justify-between pt-4">
          {step > 1 && (
            <Button
              variant="outline"
              onClick={() => setStep(s => s - 1)}
            >
              Previous
            </Button>
          )}
          {step < questions.length ? (
            <Button
              className="ml-auto"
              onClick={() => setStep(s => s + 1)}
              disabled={!answers[currentQuestion.id]}
            >
              Next
            </Button>
          ) : (
            <Button
              className="ml-auto"
              onClick={handleSubmit}
              disabled={!answers[currentQuestion.id]}
            >
              Pay
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
