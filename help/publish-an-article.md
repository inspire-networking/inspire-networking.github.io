# Publish an article

The newest 3 articles appear on the home page automatically.

## 1. Upload any images

Follow [Add or replace a photo](add-or-replace-a-photo.md) and put them in `images/news`. Skip this if you have none: the News page shows the Inspire logo instead.

## 2. Create the article's file

1. Open this link: **[Start a new article](https://github.com/inspire-networking/inspire-networking.github.io/new/main?filename=_news/new-article.md&value=---%0Atitle%3A%20%22Article%20headline%22%0Adate%3A%202026-11-30%0Aimage%3A%20%22%22%0Amember%3A%20%22%22%0A---%0AA%20first%20paragraph%20that%20introduces%20the%20article.%0A%0A%23%23%20A%20heading%0A%0AThe%20rest%20of%20the%20article.%0A)**
2. In the file name box at the top, replace `new-article` with a short name in lower case with hyphens, such as `spotlight-jane-example`. Keep `.md` on the end. This becomes the article's web address, so choose it carefully.
3. Fill in the top part, keeping the quote marks:

   | Line | What to put |
   |---|---|
   | `title` | The headline. Colons are fine inside the quote marks. |
   | `date` | The date as year-month-day, such as `2026-11-30` |
   | `image` | The main picture, such as `/images/news/jane-example.jpg`, or leave empty |
   | `member` | The member's file name without `.md`, such as `jane-example`, to show their card beside the article. Otherwise leave empty. |

4. Write the article under the second `---`:
   - The first paragraph appears larger, as an introduction.
   - Start a heading with `## ` and leave an empty line between paragraphs.
   - To add a picture inside the article, put this on its own line: `![Short description of the picture](/images/news/picture-name.jpg)`
5. Click **Commit changes...**, then **Commit changes**.

A few minutes later, check the [News page](https://inspire-networking.github.io/news/).
