import { CheckCircle2, Clock, ArrowRight, Layout, Code2, Rocket, Info } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';

function App() {
  const milestones = [
    {
      title: "Project Initialization",
      description: "Set up React 19, Vite, and Tailwind CSS v4 environment.",
      status: "completed",
      icon: <Layout className="w-5 h-5 text-green-500" />,
      date: "Current"
    },
    {
      title: "UI Component Library",
      description: "Integrated Shadcn UI components for rapid development.",
      status: "completed",
      icon: <Code2 className="w-5 h-5 text-green-500" />,
      date: "Current"
    },
    {
      title: "Environment Verification",
      description: "Updating App.tsx to verify the build and styling environment.",
      status: "in-progress",
      icon: <Clock className="w-5 h-5 text-blue-500" />,
      date: "Active"
    },
    {
      title: "Feature Development",
      description: "Building out the core application logic and pages.",
      status: "pending",
      icon: <Rocket className="w-5 h-5 text-muted-foreground" />,
      date: "Upcoming"
    }
  ];

  const overallProgress = 50;

  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/10">
      {/* Header */}
      <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-primary-foreground font-bold">
              G
            </div>
            <span className="font-bold text-xl tracking-tight">Gebeya Dala</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">Overview</a>
            <a href="#" className="hover:text-foreground transition-colors">Components</a>
            <a href="#" className="hover:text-foreground transition-colors">Documentation</a>
          </nav>
          <Button variant="outline" size="sm">
            View Source
          </Button>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Hero Section */}
        <section className="mb-12 text-center">
          <Badge variant="secondary" className="mb-4 px-3 py-1 text-xs font-semibold uppercase tracking-wider">
            Development Report
          </Badge>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">
            Progress So Far
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Your project environment is ready and the foundation has been laid. 
            Here is a summary of what has been accomplished and what's next.
          </p>
        </section>

        {/* Progress Card */}
        <Card className="mb-12 border-2 border-primary/10 shadow-lg bg-card/50 backdrop-blur-sm">
          <CardHeader>
            <div className="flex items-center justify-between mb-2">
              <CardTitle className="text-2xl font-bold">Overall Completion</CardTitle>
              <span className="text-2xl font-bold text-primary">{overallProgress}%</span>
            </div>
            <CardDescription>
              Based on the initial setup and environment verification phases.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <Progress value={overallProgress} className="h-3" />
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 rounded-xl bg-muted/50 border border-border">
                <div className="text-sm font-medium text-muted-foreground mb-1">Status</div>
                <div className="text-lg font-bold flex items-center gap-2 text-blue-600">
                  <div className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
                  Building
                </div>
              </div>
              <div className="p-4 rounded-xl bg-muted/50 border border-border">
                <div className="text-sm font-medium text-muted-foreground mb-1">Stack</div>
                <div className="text-lg font-bold">React + Vite</div>
              </div>
              <div className="p-4 rounded-xl bg-muted/50 border border-border">
                <div className="text-sm font-medium text-muted-foreground mb-1">Styling</div>
                <div className="text-lg font-bold">Tailwind v4</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Milestones */}
        <section className="space-y-6">
          <div className="flex items-center gap-2 mb-2">
            <h2 className="text-2xl font-bold tracking-tight">Project Milestones</h2>
          </div>
          
          <div className="grid gap-4">
            {milestones.map((milestone, index) => (
              <Card key={index} className={`overflow-hidden transition-all hover:shadow-md ${milestone.status === 'in-progress' ? 'border-primary/50 ring-1 ring-primary/20' : ''}`}>
                <CardContent className="p-0">
                  <div className="flex items-start gap-4 p-6">
                    <div className="mt-1">
                      {milestone.status === 'completed' ? (
                        <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                          <CheckCircle2 className="w-6 h-6 text-green-600" />
                        </div>
                      ) : milestone.status === 'in-progress' ? (
                        <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center animate-pulse">
                          <Clock className="w-6 h-6 text-blue-600" />
                        </div>
                      ) : (
                        <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
                          <Clock className="w-6 h-6 text-muted-foreground" />
                        </div>
                      )}
                    </div>
                    
                    <div className="flex-1 space-y-1">
                      <div className="flex items-center justify-between">
                        <h3 className="font-bold text-lg leading-tight">{milestone.title}</h3>
                        <Badge variant={milestone.status === 'completed' ? 'default' : milestone.status === 'in-progress' ? 'secondary' : 'outline'}>
                          {milestone.status}
                        </Badge>
                      </div>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {milestone.description}
                      </p>
                      <div className="pt-2 text-xs font-medium text-muted-foreground uppercase tracking-widest">
                        {milestone.date}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Next Steps */}
        <section className="mt-12 p-8 rounded-3xl bg-primary text-primary-foreground">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1 space-y-4">
              <h2 className="text-3xl font-bold tracking-tight">Ready for Next Steps</h2>
              <p className="text-primary-foreground/80 text-lg">
                The foundation is rock solid. Now we can focus on building the features and components that will bring your idea to life.
              </p>
              <div className="flex flex-wrap gap-4 pt-2">
                <Button variant="secondary" className="group">
                  Define Scope
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Button>
                <Button variant="outline" className="bg-transparent border-primary-foreground/20 hover:bg-primary-foreground/10">
                  <Info className="mr-2 w-4 h-4" />
                  View Guide
                </Button>
              </div>
            </div>
            <div className="hidden lg:block w-48 h-48 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 p-6">
              <div className="w-full h-full flex flex-col items-center justify-center gap-4 text-center">
                <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center">
                  <Rocket className="w-8 h-8" />
                </div>
                <div className="font-bold text-sm">Next: Phase 3</div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-20 pt-8 border-t text-center text-sm text-muted-foreground pb-12">
          <p>© 2024 Gebeya Dala. Built with precision and speed.</p>
        </footer>
      </main>
    </div>
  );
}

export default App;
