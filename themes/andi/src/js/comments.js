export default () => {
  const _initCommentsListener = () => {
    const _loadCommentsBtn = document.querySelector('[data-js="comments-load"]');

    if (_loadCommentsBtn) {
      _loadCommentsBtn.addEventListener('click', (e) => {
        const _clickedBtnNode = e.currentTarget;
        const _commentArea = _clickedBtnNode.parentNode;
        console.debug('comment area', _commentArea);
        const _pageUrl = _commentArea.getAttribute('data-page-url');
        const _pageId = _commentArea.getAttribute('data-page-identifier');

        // Clean comment area
        _commentArea.innerHTML = '';

        // Add HTML and JS
        const _disqusThread = document.createElement('div');
        _disqusThread.setAttribute('id', 'disqus_thread');

        _commentArea.appendChild(_disqusThread);

        window.disqus_config = function () {
          this.page.url = _pageUrl;
          this.page.identifier = _pageId;
        };

        // Download disqus and initialize!
        (function () {
          var d = document,
            s = d.createElement('script');
          s.src = 'https://andi1984.disqus.com/embed.js';
          s.setAttribute('data-timestamp', +new Date());
          (d.head || d.body).appendChild(s);
        })();

      });
    }
  };

  // alternative to DOMContentLoaded event
  if (/complete|interactive|loaded/.test(document.readyState)) {
    _initCommentsListener();
  } else {
    document.addEventListener('DOMContentLoaded', _initCommentsListener, false);
  }
};
