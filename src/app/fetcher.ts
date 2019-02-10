export class Fetcher {
	private apiKey: string = '5a67f9304faa41e5b457f84bd54c0a20';
	private type: string;

	constructor(type: string) {
		this.type = type;
	}

	queryConstructor(srcID: string) {		
		return `https://newsapi.org/v2/${this.type === 'src' ? 'sources?' : `top-headlines?sources=${srcID}&`}apiKey=${this.apiKey}`;
	}

	async fetchData(src: string) {
		try {
			let response: any = await fetch(this.queryConstructor(src));
			if (response.ok) {
				let status = response.status;
				if (status === 200) {
					response = await response.json();
				} else {
					if (status === 429) console.log('limit has been reached');
					if (status === 400) console.log('bad request');
				};
			};
			return response.articles || response.sources;
		} catch (e) {
			console.log(e);
		}
	}
}