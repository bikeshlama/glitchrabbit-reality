
import { GlitchButton } from "./GlitchButton";
import { GlitchText } from "./GlitchText";

export const Community = () => {
  const socialLinks = [
    {
      platform: "Twitter",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
        </svg>
      ),
      color: "bg-[#1DA1F2]",
      url: "https://twitter.com/glitchrabbit",
      members: "42.8K",
    },
    {
      platform: "Telegram",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm.54 18.937l-.183-.092a.481.481 0 0 1-.274-.247 3.096 3.096 0 0 1-.152-.537l-1.497-6.949C10.424 11.1 9.67 10.979 9.32 10.5c1.804-1.102 3.63-2.222 5.278-3.458.582-.432.73-.81.274-1.272-.547-.546-1.822-.454-2.551-.091-1.095.546-2.129 1.238-3.132 1.968-.456.333-.82.74-1.186 1.14v-.183c.091-.454.455-.821.91-1.276.456-.455 6.007-5.389 6.371-5.754a.364.364 0 0 1 .274-.9c.091 0 .182.09.182.09l.64 6.371c.183.273.638.274 1.002.183.364-.9.638-.273.82-.546a.2.2 0 0 1 .273-.9c.092 0 .183.09.183.09l3.04 2.766c.456.365.456.821.092 1.186-.273.364-.82.546-1.186.546h-4.678c-.455 0-.82.273-.91.637v.183c0 .273.364.546.637.546h5.024c.637 0 1.185.273 1.549.637a.948.948 0 0 1 .364.82c0 .272-.91.454-.274.638l-7.345 6.007c-.91.091-.182.091-.273.091z" />
        </svg>
      ),
      color: "bg-[#0088cc]",
      url: "https://t.me/glitchrabbitkommunity",
      members: "27.5K",
    },
    {
      platform: "Discord",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z" />
        </svg>
      ),
      color: "bg-[#7289DA]",
      url: "https://discord.gg/glitchrabbit",
      members: "35.2K",
    },
    {
      platform: "Reddit",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z" />
        </svg>
      ),
      color: "bg-[#FF4500]",
      url: "https://reddit.com/r/glitchrabbit",
      members: "18.7K",
    },
  ];

  const fakeTweets = [
    {
      username: "CryptoVisionary",
      handle: "@crypto_visionary",
      content: "Just discovered $GLITCH and I'm blown away by this project! The concept of breaking free from market cycles is genius. Already loaded my bags! 🚀🐰 #GlitchRabbit #BreakTheMatrix",
      time: "2h ago",
      likes: 243,
      retweets: 87
    },
    {
      username: "BlockchainBeliever",
      handle: "@chain_believer",
      content: "The #GlitchRabbit community is one of the most active I've seen in months. Devs are super responsive and the roadmap looks promising. $GLITCH might be the sleeper hit of 2023! 👀",
      time: "6h ago",
      likes: 189,
      retweets: 42
    },
    {
      username: "MemeTokenExpert",
      handle: "@memetoken_guru",
      content: "Analyzing $GLITCH tokenomics and I'm impressed with the distribution. Zero taxes, locked liquidity, and clear utility. This isn't your typical memecoin, this is something special. #GlitchRabbit",
      time: "1d ago",
      likes: 412,
      retweets: 156
    }
  ];

  return (
    <section id="community" className="py-24 relative overflow-hidden bg-cyber-dark">
      <div className="scanline"></div>
      <div className="noise"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <p className="text-cyber-pink text-sm uppercase tracking-wider mb-2">Join The Movement</p>
          <GlitchText 
            text="COMMUNITY" 
            className="text-3xl sm:text-5xl font-bold"
            glitchIntensity="low"
          />
          <p className="mt-4 text-white/60 max-w-2xl mx-auto">
            Connect with fellow GlitchRabbit enthusiasts across our growing ecosystem. 
            Join the conversation and help shape the future of $GLITCH.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Social Media Links */}
          <div className="lg:col-span-1 space-y-6">
            <div className="glass-panel p-6 border border-cyber-pink/30">
              <h3 className="text-xl font-bold mb-6 text-gradient-purple">Connect With Us</h3>
              
              <div className="space-y-4">
                {socialLinks.map((social, index) => (
                  <a 
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-4 glass-panel hover:border-white/30 hover:bg-white/10 transition-all duration-300"
                  >
                    <div className="flex items-center">
                      <div className={`w-10 h-10 rounded-full ${social.color} flex items-center justify-center text-white mr-3`}>
                        {social.icon}
                      </div>
                      <div>
                        <p className="font-medium text-white">{social.platform}</p>
                        <p className="text-xs text-white/60">{social.members} members</p>
                      </div>
                    </div>
                    <svg className="w-5 h-5 text-white/70" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M9 5l7 7-7 7"></path>
                    </svg>
                  </a>
                ))}
              </div>
              
              <div className="mt-6">
                <GlitchButton variant="pink" fullWidth>JOIN OUR DISCORD</GlitchButton>
              </div>
            </div>
            
            {/* Stats */}
            <div className="glass-panel p-6 border border-cyber-pink/30">
              <h3 className="text-xl font-bold mb-4 text-gradient-purple">Community Growth</h3>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="glass-panel p-3 text-center">
                  <p className="text-2xl font-bold text-white">128K+</p>
                  <p className="text-xs text-white/60 mt-1">Total Followers</p>
                </div>
                <div className="glass-panel p-3 text-center">
                  <p className="text-2xl font-bold text-white">42+</p>
                  <p className="text-xs text-white/60 mt-1">Countries</p>
                </div>
                <div className="glass-panel p-3 text-center">
                  <p className="text-2xl font-bold text-white">8.7K+</p>
                  <p className="text-xs text-white/60 mt-1">Daily Messages</p>
                </div>
                <div className="glass-panel p-3 text-center">
                  <p className="text-2xl font-bold text-white">26</p>
                  <p className="text-xs text-white/60 mt-1">Community Events</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Twitter Feed */}
          <div className="lg:col-span-2">
            <div className="glass-panel p-6 border border-cyber-pink/30 h-full">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-gradient-purple">Latest Tweets</h3>
                <a 
                  href="https://twitter.com/hashtag/GlitchRabbit" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyber-blue text-sm hover:underline"
                >
                  #GlitchRabbit
                </a>
              </div>
              
              <div className="space-y-6">
                {fakeTweets.map((tweet, index) => (
                  <div 
                    key={index} 
                    className="glass-panel p-4 hover:bg-white/5 transition-colors duration-200"
                  >
                    <div className="flex items-start">
                      <div className="w-12 h-12 rounded-full bg-cyber-purple/20 flex items-center justify-center text-white mr-3 overflow-hidden">
                        {/* Placeholder avatar */}
                        <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path>
                        </svg>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center">
                          <p className="font-bold text-white">{tweet.username}</p>
                          <p className="ml-2 text-white/50 text-sm">{tweet.handle}</p>
                          <span className="ml-2 text-white/30">·</span>
                          <p className="ml-2 text-white/50 text-sm">{tweet.time}</p>
                        </div>
                        <p className="mt-1 text-white/90">{tweet.content}</p>
                        <div className="flex mt-3 text-white/50 text-sm">
                          <div className="flex items-center mr-4 hover:text-cyber-blue transition-colors">
                            <svg className="w-4 h-4 mr-1" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                              <path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
                            </svg>
                            Reply
                          </div>
                          <div className="flex items-center mr-4 hover:text-cyber-green transition-colors">
                            <svg className="w-4 h-4 mr-1" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                              <path d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"></path>
                            </svg>
                            {tweet.retweets}
                          </div>
                          <div className="flex items-center hover:text-cyber-pink transition-colors">
                            <svg className="w-4 h-4 mr-1" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                              <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                            </svg>
                            {tweet.likes}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 text-center">
                <a 
                  href="https://twitter.com/glitchrabbit" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-sm text-cyber-blue hover:text-cyber-blue/70 transition-colors"
                >
                  View More Tweets →
                </a>
              </div>
            </div>
          </div>
        </div>
        
        {/* Newsletter */}
        <div className="mt-16 glass-panel p-8 border border-cyber-pink/30 text-center max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold mb-4 text-gradient-purple">Get GlitchRabbit Updates</h3>
          <p className="text-white/70 mb-6">
            Subscribe to our newsletter for the latest news, exclusive airdrops, and community events.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3">
            <input 
              type="email" 
              placeholder="Enter your email address" 
              className="flex-1 bg-cyber-black/50 border border-white/20 px-4 py-2 text-white placeholder:text-white/50 focus:outline-none focus:border-cyber-pink"
            />
            <GlitchButton variant="blue">SUBSCRIBE</GlitchButton>
          </div>
          
          <p className="mt-4 text-white/50 text-xs">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
};
