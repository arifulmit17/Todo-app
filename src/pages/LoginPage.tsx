import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { useState } from 'react';
import { set } from "date-fns";


export default function LoginPage() {

  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });
  // console.log(formData.email,formData.password);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name,value} = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    
  }

  const [error, setError] = useState("");
  const handleLogin = async (e:any) => {
    e.preventDefault();
    
    setError("");

    try {
      const res = await fetch("http://localhost:3000/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData ),
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
              <Input name="email" type="email" placeholder="example@gmail.com" value={formData.email} onChange={handleInputChange} required />
            </div>

            {/* Password */}
            <div className="flex flex-col space-y-1">
              <Label>Password</Label>
              <Input name="password" type="password" value={formData.password} onChange={handleInputChange} placeholder="••••••••" required />
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
