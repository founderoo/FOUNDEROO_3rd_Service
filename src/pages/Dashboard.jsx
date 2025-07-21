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
    return (
      <div className="container mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center min-h-[50vh]">
          <div className="text-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4"></div>
            <p className="text-muted-foreground">Loading your dashboard...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-6 px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-6 sm:mb-8">
        <div className="min-w-0 flex-1">
          <h1 className="text-2xl sm:text-3xl font-bold truncate">Welcome, {userData?.displayName || 'Founder'}!</h1>
          <p className="text-muted-foreground text-sm sm:text-base">Manage your startup journey here.</p>
        </div>
        <div className="flex-shrink-0">
          <Button asChild variant="outline" size="sm" className="w-full sm:w-auto">
            <Link to="/">Back to Home</Link>
          </Button>
        </div>
      </div>

      {!userData ? (
        <Card className="max-w-2xl mx-auto">
          <CardHeader className="text-center sm:text-left">
            <CardTitle className="text-xl sm:text-2xl">Complete Your Profile</CardTitle>
            <CardDescription className="text-sm sm:text-base">Tell us about your startup journey</CardDescription>
          </CardHeader>
          <CardContent className="text-center sm:text-left">
            <p className="text-sm sm:text-base">Please complete the founder questionnaire to get started.</p>
          </CardContent>
          <CardFooter className="flex justify-center sm:justify-start">
            <Button asChild className="w-full sm:w-auto">
              <Link to="/founder-form">Start Questionnaire</Link>
            </Button>
          </CardFooter>
        </Card>
      ) : (
        <div className="space-y-4 sm:space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg sm:text-xl">Startup Journey Progress</CardTitle>
              <CardDescription className="text-sm sm:text-base">Track your startup application status</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3 sm:space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between text-sm sm:text-base">
                  <span>Application Status</span>
                  <span className="font-medium">In Review</span>
                </div>
                <Progress value={33} className="h-2 sm:h-3" />
                <div className="grid grid-cols-3 text-xs sm:text-sm text-muted-foreground mt-2">
                  <div className="text-left">Form Submitted</div>
                  <div className="text-center">Under Review</div>
                  <div className="text-right">Approved</div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg sm:text-xl">Your Startup Vision</CardTitle>
              <CardDescription className="text-sm sm:text-base">Your responses to the questionnaire</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 sm:space-y-6">
              <div className="space-y-2">
                <h3 className="font-medium text-sm sm:text-base">Problem Statement</h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{userData.problemSolving}</p>
              </div>
              <div className="space-y-2">
                <h3 className="font-medium text-sm sm:text-base">Solution Uniqueness</h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{userData.uniqueSolution}</p>
              </div>
              <div className="space-y-2">
                <h3 className="font-medium text-sm sm:text-base">Future Vision</h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{userData.futureVision}</p>
              </div>
            </CardContent>
            <CardFooter className="flex justify-center sm:justify-start">
              <Button variant="outline" asChild className="w-full sm:w-auto">
                <Link to="/founder-form">Update Responses</Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
      )}
    </div>
  );
}
