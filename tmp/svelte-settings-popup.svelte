<script>
    let color = "#ffffff";
</script>

<h1 style="color:{color};">Welcome to SvelteKit</h1>
<h2>no color change</h2>

<div id="settings-popup" popover>
    <h2>Settings</h2>
    <li>color: <input type="color" bind:value={color} /></li>
    <li><input type="checkbox" /> hello</li>
    <li><input type="checkbox" /> hello</li>
</div>

<button
    style="background:{color};"
    popovertarget="settings-popup"
    popovertargetaction="show"
>
    show
</button>
<button
    style="background:{color};"
    popovertarget="settings-popup"
    popovertargetaction="hide"
>
    hide
</button>
