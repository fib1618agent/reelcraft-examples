

# reelcraft examples

Twenty-two finished videos made with [reelcraft](https://github.com/fib1618agent/reelcraft), the local video
studio for your coding agent, plus its 0.3.0 showreel, its launch film and a film about its crew. Each example was made by an agent acting as a user, from a single
request. Every folder keeps the project sources, the share copy and a README that tells the story: the
request, the assumptions, the commands, what the critic found and what changed.

**[Open the gallery](examples/README.md)** to browse them by use case, or watch them all play on the
[reelcraft site](https://fib1618agent.github.io/reelcraft/gallery.html). To make your own, install reelcraft in
your agent: the [quick start](https://github.com/fib1618agent/reelcraft#quick-start) covers Claude Code, and
[the agents guide](https://github.com/fib1618agent/reelcraft/blob/main/docs/agents.md) covers Codex, Cursor,
Devin, OpenCode and more.

## What is here

| Path | What it is |
|---|---|
| [`examples/`](examples/README.md) | the 22 examples, one folder each (`01-launch-tidepool` to `22-manim-circle-area`), and the gallery |
| [`examples/_showreel/`](examples/_showreel/README.md) | the 50-second 0.3.0 showreel: what reelcraft renders, with its project, teaser loop, poster and credits |
| [`examples/_launch/`](examples/_launch/README.md) | the 40-second 0.2.0 launch film: its teaser loop, poster and credits |
| [`examples/_crew/`](examples/_crew/README.md) | the 45-second crew film: how the director, the briefs and the critic work, with its project and credits |
| [`examples/_apps/tidepool/`](examples/_apps/tidepool/README.md) | Tidepool, the fictional notes app several examples record |
| [`examples/_html/`](examples/_html/README.md) | two templates exported as self-contained HTML videos |
| [`examples/MEDIA.json`](examples/MEDIA.json) | the videos that are release assets instead of files in git |
| [`scripts/publish_media.py`](scripts/publish_media.py) | checks, lists and uploads those release assets |

## The full-quality videos

Git keeps the posters, captions, share copy, project sources and every video up to 10 MB. Any file over
10 MB and every ProRes `.mov` is an asset of this repository's release
[`examples-media-v1`](https://github.com/fib1618agent/reelcraft-examples/releases/tag/examples-media-v1),
listed in [`examples/MEDIA.json`](examples/MEDIA.json) with its size and SHA-256, and kept out of git by
the managed block at the end of [`.gitignore`](.gitignore). The gallery and each example's README link
straight to those files.

```bash
python3 scripts/publish_media.py                        # verify the manifest and .gitignore against the files
python3 scripts/publish_media.py --links --example 20   # markdown links to one example's release assets
python3 scripts/publish_media.py --refresh              # after adding or re-rendering media
python3 scripts/publish_media.py --upload               # upload them (needs gh and the release tag)
```

## Rebuilding an example

Each example's `project/` folder (or episode folder) is a reelcraft project, and its README lists the
commands in order. Install [reelcraft](https://github.com/fib1618agent/reelcraft#quick-start) first; the
commands are documented in its [guides](https://github.com/fib1618agent/reelcraft/blob/main/docs/README.md).

## Licenses and credits

The code and text written for these examples are MIT licensed ([LICENSE](LICENSE)), like reelcraft itself.
Third-party material keeps its own license: each example credits its sources in its folder
(`credits.txt`, and its README), and example 13 is CC BY-SA 4.0 like the Wikipedia article it adapts
([its license](examples/13-wikipedia-waggle-dance/LICENSE.txt)). The showreel's music is "Born Of The Sky"
by Scott Buckley, CC BY 4.0, and its CO2 data is NOAA GML / Scripps (public domain)
([credits](examples/_showreel/credits.txt)). The launch film's music is "With These
Hands" by Scott Buckley, CC BY 4.0; under the composer's terms it ships only inside the film, never as a
separate audio file ([credits](examples/_launch/credits.txt)). The crew film's music is "Artemis" by Scott
Buckley, CC BY 4.0, on the same terms; it shows two frames of example 13, whose bee footage is CC BY 3.0
([credits](examples/_crew/credits.txt)).

Changes and issues about reelcraft itself belong in the
[reelcraft repository](https://github.com/fib1618agent/reelcraft/issues).
