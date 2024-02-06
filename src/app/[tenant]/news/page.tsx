
export default async function NewsPage(props: { params: { tenant: string } }) {
    const { tenant } = props.params;

    const data = await fetch(`http://localhost:3000/${tenant}/api/news`)
        .then(resp => resp.json()) as { title: string; content: string; picture: string }[];

    return (
        <div className="flex flex-col gap-10 items-center justify-center p-10">
            <h1 className="text-4xl text-white font-bold">
                { `News Page of ${tenant}`}
            </h1>
            
            <div>
                {
                    data.map((news, index) => (
                        <article className="px max-w-lg border-b border-b-white/50 last:border-b-0 py-4 text-white flex flex-col items-stretch gap-2" key={index}>
                            <img className="w-full h-60 object-cover rounded-lg" src={news.picture} alt="title"/>
                            <h1 className="text-2xl ">{ news.title }</h1>
                            <p className="text-white/80 font-light">{ news.content }</p>
                        </article>
                    ))
                }
            </div>

            {/* <a href={`/${tenant}`} className="text-white">Back</a> */}
            <a href={`/`} className="text-white">Back</a>
        </div>
    );
}