<style>
.page {
  padding: 2rem;
	-webkit-box-shadow: 0.2rem 0.2rem 1rem 0.2rem var(--color-book-dark);
	box-shadow: 0.2rem 0.2rem 1rem 0.2rem var(--color-book-dark);
  display: flex;
  flex-direction: column;
}

@media only screen and (max-width: 90rem) {
  .page {
    -webkit-box-shadow: 0 0 0 0;
	  box-shadow: 0 0 0 0;
  }
}

.divider {
  border-top: 1px solid var(--color-text);
  border-bottom: 0px;
  opacity: 0.1;
  margin: 1.5rem 0;
}

:global(*[slot="components"]) {
  flex: 1;
  display: flex;
  flex-direction: column;
}

:global(*[slot="components"] > *) {
  padding-bottom: 2rem;
}
</style>

<section class="page">
  <header>
    <slot name="title"/>
    <hr class="divider"/>
  </header>
  <slot/>
  <slot name="components"/>
</section>
