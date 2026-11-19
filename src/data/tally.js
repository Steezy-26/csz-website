// Paste each form ID from the Share tab in Tally (the code after tally.so/r/)
export const TALLY = {
  individual: 'REPLACE_WITH_APPLICATION_FORM_ID',
  sponsor: 'REPLACE_WITH_SPONSOR_FORM_ID',
  institutional: null,
}

export const embedUrl = (id) =>
  `https://tally.so/embed/${id}?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1`
