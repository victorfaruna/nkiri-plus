import * as cheerio from 'cheerio';
import axios from 'axios';
export async function GET() {
	try {
		const { data } = await axios.get('https://nkiri.com');
		const $ = cheerio.load(data);

		let drama_data: any = [];
		let movie_data: any = [];
		let series_data: any = [];

		$('.eael-post-grid.eael-post-appender').each((i, elem) => {
			switch (i) {
				case 0:
					for (const item of elem.children) {
						let image = $(item).find('img').attr('src');
						let title = $(item).find('a.eael-grid-post-link').text();
						let link = $(item).find('a.eael-grid-post-link').attr('href');
						drama_data.push({ poster_path: image, title: title, link: link });
					}
					break;
				case 1:
					for (const item of elem.children) {
						let image = $(item).find('img').attr('src');
						let title = $(item).find('a.eael-grid-post-link').text();
						let link = $(item).find('a.eael-grid-post-link').attr('href');
						movie_data.push({ poster_path: image, title: title, link: link });
					}
					break;

				case 2:
					for (const item of elem.children) {
						let image = $(item).find('img').attr('src');
						let title = $(item).find('a.eael-grid-post-link').text();
						let link = $(item).find('a.eael-grid-post-link').attr('href');
						series_data.push({ poster_path: image, title: title, link: link });
					}
					break;
			}
		});
		return new Response(
			JSON.stringify({
				page: 1,
				results: { drama: drama_data, movie: movie_data, series: series_data }
			}),
			{
				status: 200,
				headers: {
					'Content-Type': 'application/json'
				}
			}
		);
	} catch (error) {
		console.log(error);
		return new Response(JSON.stringify(error), {
			status: 500,
			headers: {
				'Content-Type': 'application/json'
			}
		});
	}
}
