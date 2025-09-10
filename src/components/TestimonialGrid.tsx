export default function TestimonialGrid() {
  const testimonials = [
    {
      quote: "uru.zone transformed my training. more confident form, faster progress.",
      author: "chris a., athlete"
    },
    {
      quote: "as a coach, live data is a game changer. i adjust mid-session.",
      author: "coach mark l."
    },
    {
      quote: "finally, feedback that matters for lifting. it's in a class of its own.",
      author: "emma r., lifter"
    }
  ]

  return (
    <div className="grid md:grid-cols-3 gap-8">
      {testimonials.map((testimonial, index) => (
        <blockquote 
          key={index}
          className="bg-zinc-900 border-l-4 border-zinc-700 rounded-r-xl p-6"
        >
          <p className="text-zinc-300 mb-4">
            "{testimonial.quote}"
          </p>
          <cite className="text-sm text-zinc-500 not-italic">
            — {testimonial.author}
          </cite>
        </blockquote>
      ))}
    </div>
  )
}