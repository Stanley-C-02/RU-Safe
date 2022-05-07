(() => {
  const e = setInterval(t, 1e3);

  function t() {
      const t = document.querySelector("c-wiz > div > div > div:nth-child(9) > div:nth-child(3) > div:nth-child(4) > div > div:nth-child(2) > div > div:nth-child(2)");
      if (t) {
          clearInterval(e);
          n(t)
      }
  }

  function n(t) {
      const e = new MutationObserver(i);
      e.observe(t, {
          childList: true,
          subtree: true
      })
      console.log("D");
  }

  function i(t) {
      t.forEach(t => {
          e(t.addedNodes).forEach(t => {
              let e = [t];
              if (t.children) {
                  e = [...e, r(t)]
              }
              e = e.flat();
              const n = e.filter(t => t && typeof t.hasAttribute === "function" && t.hasAttribute("data-message-text"));
              n.forEach(t => {
                  if (t.textContent && t.textContent.startsWith("https")) {
                      i(t)
                  }
              })
          })
      });

      function i(t) {
          const e = document.createElement("img");
          e.style.maxWidth = "100%";
          e.onload = function() {
              t.replaceChildren(e)
          };
          e.onerror = function() {
              e.remove()
          };
          e.src = t.textContent
      }

      function e(t) {
          if (t) {
              return Array.from(t)
          }
          return []
      }

      function r(t) {
          return e(t.children).reduce((t, e) => {
              t.push(e);
              if (e.children) {
                  t.push(...r(e))
              }
              return t
          }, [])
      }
  }
})();
