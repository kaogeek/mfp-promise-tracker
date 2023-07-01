export default async function ({ store }) {
  await store.dispatch('laws/fetchLaws');
}
