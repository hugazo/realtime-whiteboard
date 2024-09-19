import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { SiGoogle, SiFacebook, SiGithub } from '@icons-pack/react-simple-icons'

export const description =
  "A simple login form with email and password. The submit button says 'Sign in'."

export default function LoginForm() {
  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle className="text-2xl">Login</CardTitle>
          <CardDescription>
            Enter your email below to login to your account.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="m@example.com" required />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" required />
          </div>
          <div className="gap-2 flex justify-center">
            <Button>
              <SiFacebook />
            </Button>
            <Button>
              <SiGithub />
            </Button>
            <Button>
              <SiGoogle />
            </Button>
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full">Or Just Sign In With Google</Button>
        </CardFooter>
      </Card>
    </div>
    
  )
}
