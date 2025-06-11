import { useEffect, useState } from 'react';
import { Button } from "@/components/ui/button";
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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

          <Card>
            <CardHeader>
              <CardTitle>Users</CardTitle>
              <CardDescription>Total user count</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-4xl font-bold">1,234</p>
            </CardContent>
            <CardFooter>
              <Button variant="ghost" size="sm">View all users</Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Revenue</CardTitle>
              <CardDescription>Monthly revenue</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-4xl font-bold">$12,345</p>
            </CardContent>
            <CardFooter>
              <Button variant="ghost" size="sm">View details</Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Activity</CardTitle>
              <CardDescription>Weekly active users</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-4xl font-bold">78%</p>
            </CardContent>
            <CardFooter>
              <Button variant="ghost" size="sm">View analytics</Button>
            </CardFooter>
          </Card>
        </div>
      )}
    </div>
  );
}
