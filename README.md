# Experimenting TanStack Form

## Goal

Explore how much work is needed to implement some common behaviors, such as multi-step forms or disabling submit button upon validation errors, and experiment some of their core features to see how good they are.

## Context

In work we have A LOT of forms, mainly using [Ant Design's Form](https://ant.design/components/form). I don't really like AntD, and it is a stylized library too, but their form component is not bad at all.

## Results

Overall I like the library. The API is very different from AntD's Form or [React Hook Form](https://www.react-hook-form.com/), but it's not bad at all.

People may look at the docs and think it's too much code, boilerplate and effort for low results. Depending on your usage, it may be overkill, but for me the boilerplate is well worth it. And, for what it's worth, I don't mind boilerplates as long as you can isolate the code and reuse it where you need, which is the case with TanStack Form.

One of the benefits granted by the "weird" API is providing type safety, and I have to say it is awesome! My usual workaround is to write enums for the field names and also provide a Type for the form, which are precisely the type of boilerplate I dislike, since you have to do it every single implementation, individually, to prevent mistakes. And TanStack Form fixes it.

### Flaws

- If a validator is defined to the whole form, like `z.object({...})`, it causes all fields to rerender, which is not desirable at all;
- I'm not a fan of what I had to do to make the submit button get disabled upon errors. There's no way to "shadow validate", what I had to do is only display errors when the field has been interacted with;
- I don't like the API for validators. If you want the same validation during `onChange` and `onSubmit` you have to created a variable to not cause duplication. I tried encapsulating `AppField` but it didn't work, I don't think you are supposed to override it (though there's probably a way to do it).
