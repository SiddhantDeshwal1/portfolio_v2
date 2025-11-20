import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { SiArchlinux, SiGnubash, SiNeovim, SiGithub } from 'react-icons/si';
import { FaDisplay } from 'react-icons/fa6';
import { BsTerminalFill, BsFillPlayCircleFill } from 'react-icons/bs';
import { GrCluster } from 'react-icons/gr';

const setupIcons = [
  { name: 'Arch Linux', icon: SiArchlinux, color: 'text-blue-500' },
  { name: 'Bash', icon: SiGnubash, color: 'text-green-500' },
  { name: 'Neovim', icon: SiNeovim, color: 'text-green-600' },
  { name: 'Hyprland', icon: GrCluster, color: 'text-cyan-500' },
];

const neofetchOutput = `
                   -Siddhant
                  .o+
                 \
                \
               \
               -+
             \
            \
           \
          \
         ./ooosssso++osssssso+
        .oossssso-    \
       -osssssso.      :so##sl-
      :osssssss/        ##sso:
     .ossssssss/       .sso:
     /ossssssss/        sso-
     /ossssssss/        /sso.
     .osssssssso/         so:
     .osssso++osssso-      /sso.
      .osssso- .osssso:      /sso.
       .osssso-   osssso+:    /sso.
        -osssso-   .+osssso+-   /sso.
         -osssso-     /sossso+-  /sso.
          .+osssso-       /sossso+- /sso.
           ./osssso-         /sossso+-/sso.
            ./osssso-           /sossso+/so.
             ./osssso-             /sossso+/s-
              ./osssso-               /sossso+/so.
               ./osssso-                 /sossso+/s-
                ./osssso-                   /sossso+/so
                 ./osssso-                     /sossso+/s-
                  ./osssso-                       /sossso+/so.
                   ./osssso-                         /sossso+/s-
                    ./osssso-                           /sossso+/so-
                     ./osssso-                             /sossso+/
                      -osssso-                               /sossso+-
                       -osssso-                                 /sossso+-
                        -osssso-                                   /sossso+-
                         -osssso-                                     /sossso+-
                          -osssso-                                       /sossso+-
                           -osssso-                                         /sossso+-
                            -osssso-                                           /sossso+-
                             -osssso-                                             /sossso+-
                              -osssso-                                               /sossso+-
                               -osssso-                                                 /sossso+-
                                -osssso-                                                   /sossso+-
                                 -osssso-                                                     /sossso+-
                                  -osssso-                                                       /sossso+-
                                   -osssso-                                                         /sossso+-
                                    -osssso-                                                           /sossso+-
                                     -osssso-                                                             /sossso+-
                                      -osssso-                                                               /sossso+-
                                       -osssso-                                                                 /sossso+-
                                        -osssso-                                                                   /sossso+-
                                         -osssso-                                                                     /sossso+-
                                          -osssso-                                                                       /sossso+-
                                           -osssso-                                                                         /sossso+-
                                            -osssso-                                                                           /sossso+-
                                             -osssso-                                                                             /sossso+-
                                              -osssso-                                                                               /sossso+-
`;

const cowsayOutput = `
  < I use Arch btw />
   ----------------
          \   ^__^
           \  (oo)\л_______
              (__)\       )\/\
                  ||----w |
                  ||     ||
`;


export default function LinuxRicingSection() {
  return (
    <section id="linux-ricing" className="min-h-screen flex items-center justify-center px-4 py-24" data-testid="section-linux">
      <div className="max-w-6xl mx-auto w-full space-y-12 fade-in">
        <div className="space-y-2">
          <div className="text-sm text-primary/60 font-mono">
            <span className="text-primary">$</span> neofetch | cowsay
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-primary glow-text" data-testid="text-linux-header">
            rice_details.txt
          </h2>
        </div>

        <div className="space-y-8">
          <Card className="p-8 border-primary/30 bg-card/40 backdrop-blur-sm space-y-6 scale-in" data-testid="card-setup-info">
            <div className="flex items-center gap-3">
              <BsTerminalFill className="w-6 h-6 text-primary" />
              <h3 className="text-xl font-bold text-foreground">My Arch Setup</h3>
            </div>
            
            <p className="text-muted-foreground">
              A meticulously crafted Arch Linux environment with custom window manager configurations, 
              dotfiles, and a terminal-centric workflow optimized for productivity and aesthetics. 
              <span className="text-primary/70 italic"> (If it's not riced, is it even Linux?)</span>
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-4">
              {setupIcons.map((item, index) => (
                <div 
                  key={item.name}
                  className="flex flex-col items-center gap-3 p-4 rounded-md border border-primary/20 hover-elevate scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                  data-testid={`setup-icon-${item.name.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  <item.icon className={`w-10 h-10 ${item.color}`} />
                  <span className="text-xs text-center text-muted-foreground">{item.name}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4 pt-6">
              <Button variant="outline" className="border-primary/50" data-testid="button-dotfiles-repo">
                <SiGithub className="w-4 h-4 mr-2" />
                Dotfiles Repo
              </Button>
              <Button variant="outline" className="border-primary/50" data-testid="button-setup-guide">
                <FaDisplay className="w-4 h-4 mr-2" />
                Setup Guide
              </Button>
            </div>
          </Card>

          <div className="grid sm:grid-cols-2 gap-6">
            <Card 
              className="aspect-video border-primary/30 bg-black backdrop-blur-sm hover-elevate flex items-center justify-center overflow-hidden relative group scale-in p-4"
              data-testid="card-neofetch">
              <pre className="text-xs text-primary font-mono whitespace-pre-wrap">
                {neofetchOutput}
              </pre>
            </Card>
            <Card 
              className="aspect-video border-primary/30 bg-black backdrop-blur-sm hover-elevate flex items-center justify-center overflow-hidden relative group scale-in p-4"
              data-testid="card-cowsay">
              <pre className="text-xs text-primary font-mono whitespace-pre-wrap">
                {cowsayOutput}
              </pre>
            </Card>
          </div>

          <Card className="p-6 border-primary/30 bg-card/40 backdrop-blur-sm" data-testid="card-video-demo">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <BsFillPlayCircleFill className="w-5 h-5 text-primary" />
                <h3 className="text-lg font-bold text-foreground">Setup Walkthrough Video</h3>
              </div>
              <div className="aspect-video bg-black rounded-md overflow-hidden border border-primary/30">
                <video 
                  className="w-full h-full"
                  controls
                  poster="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1920' height='1080'%3E%3Crect width='1920' height='1080' fill='%23000'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='monospace' font-size='48' fill='%2339ff14'%3E▶ Setup Demo Video%3C/text%3E%3C/svg%3E"
                  data-testid="video-setup-demo">
                  <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              <p className="text-xs text-muted-foreground font-mono">
                <span className="text-primary">$</span> # Add your own rice demo video here
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}