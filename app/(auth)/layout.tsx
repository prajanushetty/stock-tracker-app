import Image from "next/image"

const layout =({children }: {children: React.ReactNode})=>{
  return (
    <main className="auth-layout">
        <section className="auth-left-section scrollbar-hide-default">
            {/* <Link href ='/' className="auth-logo">
                <Image src="/public/assets/icons/logo.svg" alt="Star Icon" width={140} height={32} className="h-8 w-auto"/>
            </Link> */}
            <div className="pt-10 pb-6 lg:pb-8 flex-1">{children}</div>
        </section>

        <section className="auth-right-section">
            <div className="relative lg:mb-16">
                <blockquote className="auth-quote">
                    <p className="auth-quote-text">The stock market is filled with individuals who know the price of everything, but the value of nothing.</p>
                    <footer className="auth-quote-footer">- Philip Fisher</footer>
                </blockquote>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <cite className="auth-testimonial-author">- Ethan R.</cite>
                <p className="max-md:text-xs test-gray-500">Retail Investor</p>
              </div>
              <div>
                <div className="flex items-center gap-0.5">
                  {[1,2,3,4,5].map((star)=>
                  (
                     <Image key={star} src="/public/assets/icons/star.svg" alt="Star Icon" width={20} height={20} className="h-5 w-5"/>
                  ))}
                </div>
                <p className="max-md:text-xs test-gray-500">Long-term Investor</p>
              </div>
            </div>

            <div className="flex-1 relative">
                  <Image src="/public/assets/images/dashboard.png" alt="Dashboard-preview" width={1000} height={400} className="auth-dashboard-preview absolute top-0"/>
            </div>
        </section>
    </main>
  )
}
export default layout

