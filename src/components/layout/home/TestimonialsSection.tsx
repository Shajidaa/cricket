import { Star, Quote } from 'lucide-react';

const testimonials = [
    {
        name: "Rajesh Kumar",
        role: "Cricket Enthusiast",
        avatar: "👨‍💼",
        rating: 5,
        text: "The best cricket app I've ever used! Live scores are incredibly fast and accurate. Never miss a moment of the action."
    },
    {
        name: "Sarah Johnson",
        role: "Sports Journalist",
        avatar: "👩‍💻",
        rating: 5,
        text: "As a sports journalist, I rely on accurate and timely cricket data. This platform delivers exactly what I need, when I need it."
    },
    {
        name: "Mohammed Ali",
        role: "Fantasy Cricket Player",
        avatar: "🏏",
        rating: 5,
        text: "The detailed statistics and player insights have significantly improved my fantasy cricket performance. Highly recommended!"
    }
];

export default function TestimonialsSection() {
    return (
        <section className="py-16 bg-gradient-to-br from-gray-50 to-gray-100">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-800 mb-4">What Cricket Fans Say</h2>
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                        Join thousands of satisfied users who trust us for their cricket updates
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group hover:transform hover:-translate-y-2 relative"
                        >
                            {/* Quote Icon */}
                            <div className="absolute top-6 right-6 opacity-20 group-hover:opacity-30 transition-opacity">
                                <Quote className="w-8 h-8 text-red-600" />
                            </div>

                            {/* Rating */}
                            <div className="flex items-center gap-1 mb-6">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                                ))}
                            </div>

                            {/* Testimonial Text */}
                            <p className="text-gray-700 leading-relaxed mb-6 italic">
                                "{testimonial.text}"
                            </p>

                            {/* User Info */}
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center text-white text-xl">
                                    {testimonial.avatar}
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
                                    <p className="text-gray-500 text-sm">{testimonial.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}