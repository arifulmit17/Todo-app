import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";


export default function RegisterPage() {
  return (
    <div className="flex justify-center items-center h-screen">
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle className="text-2xl text-center">Register</CardTitle>
        </CardHeader>

        <CardContent>
          <form className="space-y-4">
            {/* Email */}
            <div className="flex flex-col space-y-1">
              <Label>Email</Label>
              <Input type="email" placeholder="example@gmail.com" required />
            </div>

            {/* Password */}
            <div className="flex flex-col space-y-1">
              <Label>Password</Label>
              <Input type="password" placeholder="••••••••" required />
            </div>

            {/* Submit Button */}
            <Button className="w-full" type="submit">
              Register
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
