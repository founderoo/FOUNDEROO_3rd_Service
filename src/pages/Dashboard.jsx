import { useEffect, useState } from 'react';
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { auth } from '../firebase';
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import { useToast } from '@/components/ui/use-toast';

export default function Dashboard() {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();
  const db = getFirestore();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userId = auth.currentUser?.uid;
        if (!userId) return;

        const userDoc = await getDoc(doc(db, 'users', userId));
        if (userDoc.exists()) {
          setUserData(userDoc.data());
        }
      } catch (error) {
        toast({
          title: 'Error',
          description: 'Failed to fetch user data',
          variant: 'destructive'
        });
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  if (loading) {
    return <div className="container mx-auto py-10">Loading...</div>;
  }

  return (
    <div className="container mx-auto py-10">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold">Welcome, {userData?.displayName || 'Founder'}!</h1>
          <p className="text-muted-foreground">Manage your startup journey here.</p>
        </div>
        <Button asChild variant="outline">
          <Link to="/">Back to Home</Link>
        </Button>
      </div>

      {!userData ? (
        <Card>
          <CardHeader>
            <CardTitle>Complete Your Profile</CardTitle>
            <CardDescription>Tell us about your startup journey</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Please complete the founder questionnaire to get started.</p>
          </CardContent>
          <CardFooter>
            <Button asChild>
              <Link to="/founder-form">Start Questionnaire</Link>
            </Button>
          </CardFooter>
        </Card>
       ) : (
         <div className="space-y-6">
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Startup Journey Progress</CardTitle>
              <CardDescription>Track your startup application status</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Application Status</span>
                  <span className="font-medium">In Review</span>
                </div>
                <Progress value={33} className="h-2" />
                <div className="grid grid-cols-3 text-xs text-muted-foreground mt-1">
                  <div>Form Submitted</div>
                  <div className="text-center">Under Review</div>
                  <div className="text-right">Approved</div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Your Startup Vision</CardTitle>
              <CardDescription>Your responses to the questionnaire</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-medium">Problem Statement</h3>
                <p className="text-sm text-muted-foreground">{userData.problemSolving}</p>
              </div>
              <div>
                <h3 className="font-medium">Solution Uniqueness</h3>
                <p className="text-sm text-muted-foreground">{userData.uniqueSolution}</p>
              </div>
              <div>
                <h3 className="font-medium">Future Vision</h3>
                <p className="text-sm text-muted-foreground">{userData.futureVision}</p>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" asChild>
                <Link to="/founder-form">Update Responses</Link>
              </Button>
            </CardFooter>
          </Card>
         </div>
      )}
    </div>
  );
}
