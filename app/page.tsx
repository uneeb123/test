export default function Home() {
  const data = [
    {
      address: "0x1632918c383F6F700FC5E603709934D7070Ae97B",
      ens: "abc.eth",
      farcaster: "abc",
    },
    {
      address: "0xf58c6CEbB2359263b94BB50A6b2565eE1b0ef816",
      ens: "xyz.eth",
      farcaster: "ZYZZ",
    },
    {
      address: "0x6C562FcC1e3aF31B8bF14dDf7756492319267bA8",
      ens: "john.eth",
      farcaster: "Johnson Houston",
    },
    {
      address: "0xde8C066fAdc67Bdf1EAdd5b8e4309de60ed8DBa7",
      ens: "vitalik.eth",
      farcaster: "Vitalik",
    },
  ];
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
