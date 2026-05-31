const Home = () => {

	return (
		<main className="min-h-screen bg-linear-to-b from-slate-900 to-slate-800 text-slate-50 font-sans py-12 px-4">
			<section className="max-w-6xl mx-auto rounded-xl overflow-hidden shadow-2xl bg-white/5">
				<div className="grid md:grid-cols-2 gap-8 items-center p-10">
					<div className="space-y-6">
						<h1 className="text-4xl md:text-5xl font-extrabold">Find pieces you love</h1>
						<p className="text-slate-300">Curated home goods and accessories — crafted for comfort and style.</p>
						<div className="flex gap-4">
							<a href="/products" className="inline-flex items-center px-5 py-2.5 rounded-lg bg-gradient-to-r from-violet-600 to-cyan-400 text-white shadow-md">Shop Collection</a>
							<a href="#highlights" className="inline-flex items-center px-4 py-2 rounded-lg border border-white/10 text-white/90">Learn More</a>
						</div>
					</div>

					<div className="flex justify-center">
						<div className="w-full max-w-md rounded-lg overflow-hidden shadow-xl">
							<img src="https://picsum.photos/seed/hero1/800/600" alt="Decor sample" className="w-full h-64 md:h-80 object-cover" />
						</div>
					</div>
				</div>
			</section>

			<section className="max-w-6xl mx-auto mt-6 px-2">
				<div className="flex gap-3 flex-wrap">
					<button className="px-3 py-1 rounded-full bg-white/5 text-slate-100">New</button>
					<button className="px-3 py-1 rounded-full bg-white/5 text-slate-100">Furniture</button>
					<button className="px-3 py-1 rounded-full bg-white/5 text-slate-100">Lighting</button>
					<button className="px-3 py-1 rounded-full bg-white/5 text-slate-100">Decor</button>
					<button className="px-3 py-1 rounded-full bg-white/5 text-slate-100">Best Sellers</button>
				</div>
			</section>

			<section id="highlights" className="max-w-6xl mx-auto mt-8 px-2">
				<div className="bg-white/6 rounded-lg p-8">
					<h2 className="text-2xl font-semibold">Collections & Stories</h2>
					<p className="text-slate-300 mt-2">We curate collections around real homes and lifestyles — explore seasonal edits, editor picks, and design guides.</p>
					<a href="/products" className="mt-4 inline-block px-4 py-2 rounded-lg bg-violet-600 text-white">Browse All Products</a>
				</div>
			</section>

			<section className="max-w-6xl mx-auto mt-6 px-2">
				<div className="grid md:grid-cols-3 gap-4">
					<div className="bg-white/5 rounded-lg p-6 text-center">
						<h3 className="text-lg font-semibold">Free Shipping</h3>
						<p className="text-slate-300 mt-2">Free shipping on orders over $50.</p>
					</div>
					<div className="bg-white/5 rounded-lg p-6 text-center">
						<h3 className="text-lg font-semibold">Hassle-free Returns</h3>
						<p className="text-slate-300 mt-2">30-day returns on most items.</p>
					</div>
					<div className="bg-white/5 rounded-lg p-6 text-center">
						<h3 className="text-lg font-semibold">Design Support</h3>
						<p className="text-slate-300 mt-2">Expert advice to style your space.</p>
					</div>
				</div>
			</section>
		</main>
	);
};

export default Home;