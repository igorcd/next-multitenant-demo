
export default async function ServicesPage(props: { params: { tenant: string } }) {
    const data = await fetch(`http://localhost:3000/${props.params.tenant}/api`).then(resp => resp.json());

    return (
        <div className="flex flex-col gap-10 items-center justify-center h-screen">
            <h1 className="text-4xl text-white font-bold">
                { `Services Page of ${props.params.tenant}`}
            </h1>

            <p className="text-white text-2xl">{JSON.stringify(data)}</p>
        </div>
    );
}