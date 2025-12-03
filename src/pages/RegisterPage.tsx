import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { useState } from 'react';
import { set } from "date-fns";
import { Link } from "react-router";


export default function RegisterPage() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    createdAt: new Date().toISOString(),
    role: "user"
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
  const handleRegister = async (e:any) => {
    e.preventDefault();
    
    setError("");

    try {
      const res = await fetch("http://localhost:3000/user/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify( formData ),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message || "register failed");
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
          <CardTitle className="text-2xl text-center">Register</CardTitle>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleRegister} className="space-y-4">
            {/* Name */}
            <div className="flex flex-col space-y-1">
              <Label>Name</Label>
              <Input name="name" type="text" placeholder="name" value={formData.name} onChange={handleInputChange} required />
            </div>

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
            <Button className="w-full bg-blue-500 text-white" type="submit">
              register
            </Button>
            <div className="w-full flex justify-center">
              <p>If registered, <Link className="text-blue-500" to='/register'>Login</Link> now</p>
            </div>
            
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
