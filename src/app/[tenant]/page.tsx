export default function HomePage(props: { params: { tenant: string } }) {

    const { tenant } = props.params;

    return (
        <div className="flex items-center justify-center h-screen flex-col gap-10">

            <img src={`/${tenant}.png`} className="rounded-full w-20 h-20 border-2 border-white" alt="Logo"/>

            <h1 className=" text-4xl text-white font-bold">
                { `Home Page of ${tenant}`}
            </h1>

            <ul className="text-white text-center">
                <li>
                    <a href={`/${tenant}/news`}>Go to news</a>
                    {/* <a href={`/news`}>Go to knews</a> */}
                </li>
                <li>
                    <a href={`/${tenant}/services`}>Go to services</a>
                    {/* <a href={`/services`}>Go to services</a> */}
                </li>
            </ul>
        </div>
    );
}