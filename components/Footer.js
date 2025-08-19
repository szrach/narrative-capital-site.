export default function Footer() {
  return (
    <footer className="border-t border-border bg-white">
      <div className="container py-10 text-sm text-body/80 flex flex-col gap-3">
        <p>
          For information purposes only. Nothing on this site is an offer to sell securities or investment advice.
        </p>
        <p className="text-body/60">© {new Date().getFullYear()} Narrative Capital. All rights reserved.</p>
      </div>
    </footer>
  );
}
