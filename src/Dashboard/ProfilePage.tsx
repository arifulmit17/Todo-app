import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { useSelector } from "react-redux";
import type { RootState } from "@/app/store";

export default function ProfilePage() {
  const user = useSelector((state: RootState) => state.user.user);

  if (!user) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <Card className="p-6 shadow-md">
          <p className="text-center text-gray-600">Please log in to view your profile.</p>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex justify-center items-center bg-muted p-4">
      <Card className="w-full max-w-lg shadow-lg">
        <CardHeader className="flex flex-col items-center gap-4">
          <Avatar className="h-20 w-20">
            <AvatarFallback>
              {user.name
                .split(" ")
                .map((n) => n[0])
                .join("")
                .toUpperCase()}
            </AvatarFallback>
          </Avatar>
          <CardTitle className="text-2xl font-semibold">{user.name}</CardTitle>
          <p className="text-gray-500">{user.email}</p>
        </CardHeader>

        <CardContent className="space-y-4">
          <div className="flex justify-between border-b pb-2">
            <span className="text-gray-500">User ID:</span>
            <span className="font-medium">{user.id}</span>
          </div>

          <div className="flex justify-between border-b pb-2">
            <span className="text-gray-500">Role:</span>
            <span className="font-medium capitalize">{user.role}</span>
          </div>

          <Button className="w-full mt-4">Edit Profile</Button>
        </CardContent>
      </Card>
    </div>
  );
}
