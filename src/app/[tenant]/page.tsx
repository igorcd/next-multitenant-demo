export default function HomePage(props: { params: { tenant: string } }) {
    return (
        <div className="flex items-center justify-center h-screen flex-col gap-10">

            <img src={`/${props.params.tenant}.png`} className="rounded-full w-20 h-20 border-2 border-white" alt="Logo"/>

            <h1 className=" text-4xl text-white font-bold">
                { `Home Page of ${props.params.tenant}`}
            </h1>

            <ul className="text-white text-center">
                <li>
                    <a href={`/news`}>Go to news</a>
                </li>
                <li>
                    <a href={`/services`}>Go to services</a>
                </li>
            </ul>
        </div>
    );
}