document.addEventListener('DOMContentLoaded', initHeader, false)
const tabOpenClass = 'connect-dps-common-header__toggle-open'
function initHeader() {

  const userToggle = document.querySelector('.connect-dps-common-header__user-menu-toggle')
  const userMenu = document.querySelector('#connect-dps-common-header-user-menu')

  if (userToggle) {
    hideFallbackLinks()

    userToggle.removeAttribute('hidden')
    userToggle.setAttribute('aria-expanded', 'false')

    userToggle.addEventListener('click', function (event) {
      closeTabs([
      ])
      toggleMenu(userToggle, userMenu)
    })
  }
}

function closeTabs(tabTuples) {
  tabTuples.forEach(([tab, menu]) => {
    menu.setAttribute('hidden', 'hidden')
    tab.classList.remove(tabOpenClass)
    tab.setAttribute('aria-expanded', 'false')
    tab.setAttribute('aria-label', tab.dataset.textForShow)
  })
}

function toggleMenu(toggle, menu) {
  const isOpen = !menu.getAttribute('hidden')

  if (isOpen) {
    menu.setAttribute('hidden', 'hidden')
    toggle.classList.remove(tabOpenClass)
    toggle.setAttribute('aria-expanded', 'false')
    toggle.setAttribute('aria-label', toggle.dataset.textForShow)
  } else {
    menu.removeAttribute('hidden')
    toggle.classList.add(tabOpenClass)
    toggle.setAttribute('aria-expanded', 'true')
    toggle.setAttribute('aria-label', toggle.dataset.textForHide)
  }
}

function hideFallbackLinks() {
  const userLink = document.querySelector('.connect-dps-common-header__user-menu-link')
  userLink.setAttribute('hidden', 'hidden')
}
