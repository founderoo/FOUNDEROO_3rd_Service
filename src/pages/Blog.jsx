import { useState, useEffect } from "react"
import { ArrowUp, MessageCircle, Share, Plus, Sun, Moon, Edit, Megaphone, Trophy, Menu, X } from "lucide-react"

const BlogComponent = () => {
  const [theme, setTheme] = useState("light")
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    // Check for saved theme preference or default to 'light'
    const savedTheme = localStorage.getItem("theme") || "light"
    setTheme(savedTheme)
    document.documentElement.classList.toggle("dark", savedTheme === "dark")
    // Scroll to top when component mounts
    window.scrollTo(0, 0)
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark"
    setTheme(newTheme)
    localStorage.setItem("theme", newTheme)
    document.documentElement.classList.toggle("dark", newTheme === "dark")
  }

  const posts = [
    {
      id: 1,
      title: "How to get AI to build a website you'd actually launch",
      upvotes: 23,
      comments: 15,
      author: "@ytekin",
    },
    {
      id: 2,
      title: "Bootstrapping to $40k MRR after his VC-backed startup failed",
      upvotes: 6,
      comments: 5,
      author: "@IndieJames",
    },
    {
      id: 3,
      title: "Made $12,000 with my SaaS in 7 months. Here's what worked and what didn't.",
      upvotes: 44,
      comments: 49,
      author: "@BuildWithMe",
    },
    {
      id: 4,
      title: "If Figma and Vercel had a baby powered by AI it'd look like this",
      upvotes: 17,
      comments: 9,
      author: "@RohanChaubey",
    },
    {
      id: 5,
      title: "Founders Stop Manually searching for your target users online. Let Soya do it for you.",
      upvotes: 3,
      comments: 6,
      author: "@TS_Soya10",
    },
  ]

  const leaderboardItems = [
    {
      rank: "#1",
      name: "Linkeme",
      description: "We're Debating a Risky UX Change — Would You Push Value or Respect Silence?",
      upvotes: 7,
      avatar: "L",
    },
    {
      rank: "#2",
      name: "Clasyn",
      description: "Clasyn just got its first 3 users — and that's honestly wild to me",
      upvotes: 5,
      avatar: "C",
    },
    {
      rank: "#3",
      name: "HackerScope AI",
      description: "",
      upvotes: 0,
      avatar: "H",
    },
  ]

  if (!mounted) {
    return null
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100">
      {/* Main Content */}
      <div className="container mx-auto px-4 py-4 md:py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 md:gap-8">
          {/* Mobile: Featured Post First */}
          <div className="lg:col-span-6 lg:order-2 order-1">
            <div className="rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900/50 shadow-sm overflow-hidden">
              <div className="relative h-48 md:h-64 lg:h-80">
                <img
                  src="https://images.unsplash.com/photo-1744018195752-276f4f77cc7a?q=80&w=798&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                  alt="Clock tower rises among palm trees"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4 md:p-6">
                <h1 className="text-xl md:text-2xl lg:text-3xl font-bold mb-3 md:mb-4">
                  Hitting $2M ARR in two years even though he was "late to the AI party"
                </h1>
                <p className="text-gray-600 dark:text-gray-400 mb-4 md:mb-6 text-sm md:text-base">
                  Dominic Zijlstra built an AI SEO tool to $2M ARR in two years. Here's how.
                </p>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div className="flex items-center space-x-4 md:space-x-6">
                    <div className="flex items-center space-x-2">
                      <ArrowUp className="h-4 w-4" />
                      <span className="font-medium text-sm md:text-base">21 upvotes</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MessageCircle className="h-4 w-4" />
                      <span className="text-sm md:text-base">15 comments</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Share className="h-4 w-4" />
                      <span className="text-sm md:text-base">Share</span>
                    </div>
                  </div>
                  <span className="text-gray-600 dark:text-gray-400 text-sm md:text-base">@IndieJames</span>
                </div>
              </div>
            </div>
          </div>

          {/* Left Sidebar - Latest Posts */}
          <div className="lg:col-span-3 lg:order-1 order-2">
            <div className="space-y-4 md:space-y-6">
              <h2 className="text-lg md:text-xl font-bold">Latest Posts</h2>
              <div className="space-y-3 md:space-y-4">
                {posts.map((post) => (
                  <div
                    key={post.id}
                    className="rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900/50 shadow-sm hover:shadow-md transition-shadow cursor-pointer"
                  >
                    <div className="p-3 md:p-4">
                      <h3 className="font-medium text-sm leading-tight mb-2 md:mb-3">{post.title}</h3>
                      <div className="flex items-center justify-between text-xs text-gray-600 dark:text-gray-400">
                        <div className="flex items-center space-x-3 md:space-x-4">
                          <div className="flex items-center space-x-1">
                            <ArrowUp className="h-3 w-3" />
                            <span>{post.upvotes}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <MessageCircle className="h-3 w-3" />
                            <span>{post.comments}</span>
                          </div>
                        </div>
                        <span className="text-xs">{post.author}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="lg:col-span-3 order-3 space-y-4 md:space-y-6">
            {/* Newsletter */}
            <div className="rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900/50 shadow-sm">
              <div className="p-4 md:p-6">
                <h3 className="font-bold mb-2">Newsletter</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                  The power of the founder is exploding.
                </p>
                <button className="w-full bg-pink-500 hover:bg-pink-600 text-white py-2 px-4 rounded-md transition-colors font-medium">
                  SUBSCRIBE to keep up.
                </button>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900/50 shadow-sm">
              <div className="p-4 md:p-6">
                <h3 className="font-bold mb-4">Quick Actions</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 text-sm cursor-pointer hover:text-purple-600 transition-colors">
                    <Edit className="h-4 w-4" />
                    <span>Submit a Post to Blog</span>
                  </div>
                  <div className="flex items-center space-x-3 text-sm cursor-pointer hover:text-purple-600 transition-colors">
                    <Megaphone className="h-4 w-4" />
                    <span>Advertise on Blog</span>
                  </div>
                </div>
              </div>
            </div>

            {/* The Build Board */}
            <div className="rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900/50 shadow-sm">
              <div className="p-4 md:p-6">
                <div className="flex items-center space-x-2 mb-2">
                  <Trophy className="h-5 w-5 text-purple-600" />
                  <h3 className="font-bold">The Build Board</h3>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                  A daily leaderboard of build-in-public posts.
                </p>
                <div className="space-y-4">
                  {leaderboardItems.map((item) => (
                    <div key={item.rank} className="flex items-start space-x-3">
                      <span className="inline-flex items-center rounded-full border border-gray-200 dark:border-gray-700 px-2.5 py-0.5 text-xs font-semibold">
                        {item.rank}
                      </span>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center space-x-2 mb-1">
                          <div className="flex h-6 w-6 shrink-0 overflow-hidden rounded-full bg-purple-100 dark:bg-purple-900/50">
                            <span className="flex h-full w-full items-center justify-center text-xs font-medium text-purple-600 dark:text-purple-300">
                              {item.avatar}
                            </span>
                          </div>
                          <span className="font-medium text-sm">{item.name}</span>
                        </div>
                        {item.description && (
                          <p className="text-xs text-gray-600 dark:text-gray-400 leading-tight mb-2">
                            {item.description}
                          </p>
                        )}
                        {item.upvotes > 0 && (
                          <div className="flex items-center space-x-1">
                            <ArrowUp className="h-3 w-3" />
                            <span className="text-xs">{item.upvotes}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlogComponent