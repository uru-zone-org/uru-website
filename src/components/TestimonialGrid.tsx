import { Card } from "./Card"

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
        <Card 
          key={index}
          title={`"${testimonial.quote}"`}
        >
          <cite className="text-sm text-zinc-500 not-italic block mt-4">
            — {testimonial.author}
          </cite>
        </Card>
      ))}
    </div>
  )
}