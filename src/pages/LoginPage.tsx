import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { useState } from 'react';


export default function LoginPage() {

    const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e:any) => {
    e.preventDefault();

    setError("");

    try {
      const res = await fetch("http://localhost:5000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message || "Login failed");
        return;
      }

      // Store token
      localStorage.setItem("token", data.token);

      // Redirect user
      window.location.href = "/dashboard";
    } catch (err) {
      setError("Something went wrong");
    }
  };
  return (
    <div className="flex justify-center items-center h-screen">
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle className="text-2xl text-center">Login</CardTitle>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleLogin} className="space-y-4">
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
              Login
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
