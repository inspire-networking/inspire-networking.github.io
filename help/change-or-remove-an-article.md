# Change or remove an article

## Change an article

1. Open the [news folder](https://github.com/inspire-networking/inspire-networking.github.io/tree/main/_news) and click the article's file.
2. Click the **pencil icon** (Edit this file).
3. Make your changes. Keep the quote marks in the top part.
4. Click **Commit changes...**, then **Commit changes**.

## Remove an article

1. Open the [news folder](https://github.com/inspire-networking/inspire-networking.github.io/tree/main/_news) and click the article's file.
2. Click the **three dots** (...) at the top right of the file, then **Delete file**.
3. Click **Commit changes...**, then **Commit changes**.

## Send the old address to the News page

Do this if people may still have a link to the removed article, so they don't get an error page.

1. Open [news.md](https://github.com/inspire-networking/inspire-networking.github.io/blob/main/pages/news.md) and click the **pencil icon**.
2. Under `redirect_from:`, add a line like the others, with the removed file's name between slashes. Keep the two spaces and the hyphen at the start:

   ```
     - /removed-article-name/
   ```

3. Click **Commit changes...**, then **Commit changes**.
