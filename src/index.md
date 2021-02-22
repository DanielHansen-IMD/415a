---
layout: template.html
title: My Macs

---

# {{title}}
<ul>
    {% for mac in macs -%}
    <li>{{ mac }}</li>
    {% endfor -%}
</ul>

