export const options = { size: '1440x900', fps: 30, platform: 'mac' };

export default async function (demo) {
  await demo.goto('/');
  await demo.waitFor('h1');
  await demo.wait(3.0);                                   // Home: what it is
  await demo.chapter('Stories');
  await demo.click('a[data-nav="stories"]');
  await demo.waitFor('table');
  await demo.wait(2.0);
  await demo.click('text=Tidepool launch');               // open a story
  await demo.waitFor(2);
  await demo.wait(3.0);
  await demo.chapter('New video');
  await demo.click('a[data-nav="new"]');
  await demo.waitFor('#prompt');
  await demo.wait(0.8);
  await demo.type('#prompt', 'A 20 second explainer on how a heat pump works, calm tone', { cps: 15 });
  await demo.type('#aud', 'homeowners', { cps: 12 });
  await demo.wait(2.5);
  await demo.chapter('Templates');
  await demo.click('a[data-nav="templates"]');
  await demo.waitFor(2);
  await demo.wait(3.0);
  await demo.chapter('Sound');
  await demo.click('a[data-nav="sound-library"]');
  await demo.waitFor(2);
  await demo.wait(3.0);
  await demo.click('a[data-nav="home"]');
  await demo.wait(1.5);
}
