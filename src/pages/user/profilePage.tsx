import Image from "next/image";
import CardRow from "~/components/common/CardRow";
import Cayde from "~/public/Cayde.jpg";

// don't let user use this till they're logged in
const profilePage = () => {
  return (
    <>
      <main>
        <section className="h-128 mb-7">
          <Image
            src="/Cayde.jpg"
            alt="Profile Picture"
            width={512}
            height={512}
            className="mb-5 rounded-lg"
          />
          <div className="float">
            <h2>Bio</h2>
            <p>Hello my name is Light Bringer, I love talking lore.</p>
          </div>
        </section>
        <section>
          <h2 className="mb-5 text-2xl">Threads</h2>
          <CardRow />
          <CardRow />
          <CardRow />
          <CardRow />
          <CardRow />
        </section>
      </main>
    </>
  );
};

export default profilePage;
