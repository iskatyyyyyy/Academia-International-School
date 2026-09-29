/**
 * The fixed mesh-gradient field the glass system refracts.
 *
 * Glass is an effect defined by what sits behind it, so this has to be present
 * on every view that carries glass panels — not just the home page. Kept as its
 * own component so the Home and Programs views stay in the same light instead of
 * drifting apart as each is edited.
 *
 * Render once, near the top of the tree, directly under the root. It is
 * `position: fixed`, so the blobs animate on the compositor and nothing in the
 * document above them repaints.
 */
export default function MeshBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      <span className="mesh-blob animate-mesh-drift-a left-[-14%] top-[-12%] h-[34rem] w-[34rem] [--blob-color:#ffffff] motion-reduce:animate-none" />
      <span className="mesh-blob animate-mesh-drift-b right-[-16%] top-[-6%] h-[42rem] w-[42rem] [--blob-color:#dceee3] motion-reduce:animate-none" />
      <span className="mesh-blob animate-mesh-drift-c left-[-8%] top-[42%] h-[32rem] w-[32rem] [--blob-color:#eaf0ea] motion-reduce:animate-none" />
      <span className="mesh-blob animate-mesh-drift-d bottom-[-18%] left-[28%] h-[40rem] w-[40rem] [--blob-color:#ffffff] motion-reduce:animate-none" />
      <span className="mesh-blob animate-mesh-drift-e right-[-10%] bottom-[-16%] h-[38rem] w-[38rem] [--blob-color:#c8e2d2] motion-reduce:animate-none" />
    </div>
  );
}
