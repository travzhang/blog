import Link from "next/link"

export default function ProfilePage() {
  return (
      <div className="max-w-3xl mx-auto px-4 py-12 md:py-20">
        <h1 className="text-6xl font-bold mb-8">Hello.</h1>

        <h2 className="text-4xl font-bold mb-10">My name is Allen Zhang.</h2>

        <p className="text-xl mb-8">
          我是{" "}
          <Link href="#" className="bg-green-100 px-1 rounded">
            Canyonjs
          </Link>
            的作者，Canyonjs是一个javascript 端到端测试覆盖率收集工具。
            我目前在上海的Trip.com Groip工作。
        </p>

        <p className="text-xl mb-8">
            您可以在X和 Bluesky 上关注我， 我主要发布有关 Vue 和前端技术的帖子。如果您会说中文，
            我的中文名字是张涛，我有一个仅限中文的 X alt ，用于非技术方面的思考。
        </p>

        <p className="text-xl">
            除了工作、开源项目和帮助妻子照顾我们的孩子之外，我还喜欢去骑行、旅游，最近正在考日本驾照。
        </p>
      </div>
  )
}

