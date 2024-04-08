import prisma from "@/lib/prisma";

export default async function Home(props: any) {
  const data = await prisma.user.findMany();
  return (
    <div className="m-10">
      <table className="table-auto w-full max-w-4xl">
        <thead>
          <tr>
            <th>Address</th>
            <th>ENS</th>
            <th>Farcaster</th>
          </tr>
        </thead>
        <tbody>
          {data.map((d, k) => (
            <tr key={k}>
              <td>{d.address}</td>
              <td>{d.ens}</td>
              <td>{d.farcaster}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
