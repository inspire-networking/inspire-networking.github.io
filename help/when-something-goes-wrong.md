# When something goes wrong

If an update fails, the website keeps showing the previous version, so visitors won't see a broken site.

## You got an email saying the run failed

The email is about `pages build and deployment`.

1. Open the [Actions page](https://github.com/inspire-networking/inspire-networking.github.io/actions) and click the top run with a red cross.
2. Look for the file name and line number in the error. For example:

   ```
   Reading: _members/jane-example.md ... at line 2 column 11
   ```

   That means `jane-example.md`, line 2.
3. Open that file, click the **pencil icon** and look at that line.

The usual causes are:

| What's wrong | Fix |
|---|---|
| A colon in a value with no quote marks | Put quote marks around it: `title: "Jack: a journey"` |
| A missing quote mark | Each value needs one at the start and one at the end |
| A date in the wrong form | Use year-month-day: `2026-11-30` |

4. Save the fix. The site updates a few minutes later.

If you can't see the problem, use [Undo a mistake](undo-a-mistake.md).

## Your page shows `title:` or `date:` as text

The second `---` line is missing. **This doesn't send an email, so it's worth checking your page after each change.** Add `---` on its own line after the last setting.

## A photo shows the Inspire logo instead

The file's address doesn't match the uploaded photo exactly. Check the spelling, capitals and ending, such as `.jpg` or `.png`.

## Nothing has changed after a few minutes

1. Refresh the page. You can also try it in a private browser window.
2. Check the [Actions page](https://github.com/inspire-networking/inspire-networking.github.io/actions). A yellow dot means it's still working.
3. Check that you clicked **Commit changes**. Your change shows on the file's **History** page once it's saved.

## Still stuck?

Contact [support contact to be confirmed], and tell them which file you changed and what you were trying to do.
