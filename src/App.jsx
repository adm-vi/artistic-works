import { useState, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Toggle } from "@/components/ui/toggle"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import CarouselDemo from "@/components/CarouselDemo"
import ImageCarousel from "@/components/ImageCarousel"

function App() {
  const [count, setCount] = useState(0)
  const [dialogOpen, setDialogOpen] = useState(false)
  const [sheetOpen, setSheetOpen] = useState(false)
  const [isHovering, setIsHovering] = useState(false)
  const logoRef = useRef(null)

  return (
    <div className="max-w-[1280px] mx-auto flex min-h-screen">
      {/* Left hero sidebar column */}
      <div className="w-1/4 p-6 bg-gradient-to-b from-slate-50 to-slate-100 min-h-screen">
        <div className="sticky top-6 flex flex-col gap-6">
          <div 
            className="inline-block perspective-[800px]"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            <img 
              ref={logoRef}
              src="/artistic_logo.png" 
              alt="Artistic Logo" 
              className="w-44 h-auto mb-2 transition-all duration-300 cursor-pointer filter drop-shadow-none hover:drop-shadow-lg"
              style={{
                transform: isHovering ? 
                  'rotateY(180deg) scale(1.1) translateY(-3px)' : 
                  'rotateY(0deg)'
              }}
            />
          </div>
          
          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-slate-800">Creative Design Studio</h2>
            <p className="text-slate-600 font-light text-lg">Transforming ideas into beautiful experiences</p>
            
            <div className="h-0.5 w-16 bg-slate-300 my-6"></div>
            
            <p className="text-slate-700">
              We craft stunning digital experiences that captivate audiences and drive results.
              Our passion for design excellence sets us apart.
            </p>
            
            <button className="mt-4 px-6 py-2 bg-slate-800 text-white rounded-md hover:bg-slate-700 transition-colors">
              Get Started
            </button>
          </div>
          
          <nav className="mt-auto pt-8">
            <ul className="space-y-2">
              <li><a href="#" className="text-slate-700 hover:text-slate-900 transition-colors">Portfolio</a></li>
              <li><a href="#" className="text-slate-700 hover:text-slate-900 transition-colors">Services</a></li>
              <li><a href="#" className="text-slate-700 hover:text-slate-900 transition-colors">About Us</a></li>
              <li><a href="#" className="text-slate-700 hover:text-slate-900 transition-colors">Contact</a></li>
            </ul>
          </nav>
        </div>
      </div>
      
      {/* Right wider column with all components */}
      <div className="w-3/4 p-8">
        <h1 className="text-4xl font-bold mb-10">shadcn/ui Components</h1>
        
        {/* Carousels Section */}
        <div className="w-full mb-12">
          <h2 className="text-2xl font-bold mb-6">Carousels with Embla</h2>
          
          <div className="grid grid-cols-1 gap-10">
            <Card className="overflow-hidden">
              <CardHeader>
                <CardTitle>Basic Carousel</CardTitle>
                <CardDescription>A simple carousel with cards</CardDescription>
              </CardHeader>
              <CardContent className="pb-4">
                <CarouselDemo />
              </CardContent>
            </Card>
            
            <Card className="overflow-hidden">
              <CardHeader>
                <CardTitle>Image Carousel</CardTitle>
                <CardDescription>A carousel for displaying images</CardDescription>
              </CardHeader>
              <CardContent className="pb-4">
                <ImageCarousel />
              </CardContent>
            </Card>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
          {/* Buttons Section */}
          <Card>
            <CardHeader>
              <CardTitle>Buttons</CardTitle>
              <CardDescription>Various button styles</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-wrap gap-4">
                <Button variant="default">Default</Button>
                <Button variant="destructive">Destructive</Button>
                <Button variant="outline">Outline</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="ghost">Ghost</Button>
                <Button variant="link">Link</Button>
              </div>
              <div className="flex flex-wrap gap-4">
                <Button size="lg">Large</Button>
                <Button size="default">Default</Button>
                <Button size="sm">Small</Button>
                <Button disabled>Disabled</Button>
                <Button variant="outline" size="icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4"><path d="M5 12h14"/><path d="M12 5v14"/></svg>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Input and Select Section */}
          <Card>
            <CardHeader>
              <CardTitle>Inputs & Selects</CardTitle>
              <CardDescription>Form controls</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid w-full items-center gap-4">
                <Input type="email" placeholder="Email" />
                <Input type="password" placeholder="Password" />
              </div>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a fruit" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="apple">Apple</SelectItem>
                  <SelectItem value="banana">Banana</SelectItem>
                  <SelectItem value="orange">Orange</SelectItem>
                  <SelectItem value="pear">Pear</SelectItem>
                </SelectContent>
              </Select>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Submit</Button>
            </CardFooter>
          </Card>

          {/* Tabs Section */}
          <Card>
            <CardHeader>
              <CardTitle>Tabs</CardTitle>
              <CardDescription>Switch between different views</CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="account" className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="account">Account</TabsTrigger>
                  <TabsTrigger value="password">Password</TabsTrigger>
                  <TabsTrigger value="settings">Settings</TabsTrigger>
                </TabsList>
                <TabsContent value="account" className="p-4">
                  Account settings and preferences.
                </TabsContent>
                <TabsContent value="password" className="p-4">
                  Change your password here.
                </TabsContent>
                <TabsContent value="settings" className="p-4">
                  Manage your account settings.
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>

          {/* Toggle Section */}
          <Card>
            <CardHeader>
              <CardTitle>Toggles</CardTitle>
              <CardDescription>Toggle between states</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-4">
                <Toggle aria-label="Toggle bold">Bold</Toggle>
                <Toggle aria-label="Toggle italic">Italic</Toggle>
                <Toggle aria-label="Toggle underline">Underline</Toggle>
                <Toggle variant="outline" aria-label="Toggle strikethrough">Strikethrough</Toggle>
              </div>
            </CardContent>
          </Card>

          {/* Dialog Section */}
          <Card>
            <CardHeader>
              <CardTitle>Dialog</CardTitle>
              <CardDescription>Modal dialogs for important content</CardDescription>
            </CardHeader>
            <CardContent>
              <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
                <DialogTrigger asChild>
                  <Button variant="outline">Open Dialog</Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                  <DialogHeader>
                    <DialogTitle>Edit profile</DialogTitle>
                    <DialogDescription>
                      Make changes to your profile here. Click save when you're done.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="grid gap-4 py-4">
                    <div className="grid gap-2">
                      <Input id="name" placeholder="Name" />
                    </div>
                  </div>
                  <div className="flex items-center justify-end space-x-2">
                    <Button variant="outline" onClick={() => setDialogOpen(false)}>
                      Cancel
                    </Button>
                    <Button onClick={() => setDialogOpen(false)}>Save changes</Button>
                  </div>
                </DialogContent>
              </Dialog>
            </CardContent>
          </Card>

          {/* Sheet Section */}
          <Card>
            <CardHeader>
              <CardTitle>Sheet</CardTitle>
              <CardDescription>Side-anchored dialog</CardDescription>
            </CardHeader>
            <CardContent>
              <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
                <SheetTrigger asChild>
                  <Button variant="outline">Open Sheet</Button>
                </SheetTrigger>
                <SheetContent>
                  <SheetHeader>
                    <SheetTitle>Edit profile</SheetTitle>
                    <SheetDescription>
                      Make changes to your profile here. Click save when you're done.
                    </SheetDescription>
                  </SheetHeader>
                  <div className="grid gap-4 py-4">
                    <div className="grid gap-2">
                      <Input id="sheet-name" placeholder="Name" />
                    </div>
                  </div>
                  <div className="flex mt-4 justify-end space-x-2">
                    <Button variant="outline" onClick={() => setSheetOpen(false)}>Cancel</Button>
                    <Button onClick={() => setSheetOpen(false)}>Save changes</Button>
                  </div>
                </SheetContent>
              </Sheet>
            </CardContent>
          </Card>
        </div>
        
        <footer className="mt-16 text-center text-muted-foreground">
          <p>
            Built with Vite, React, and shadcn/ui
          </p>
        </footer>
      </div>
    </div>
  )
}

export default App
