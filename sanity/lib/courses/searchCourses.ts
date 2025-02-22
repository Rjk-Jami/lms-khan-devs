
import { defineQuery } from "groq"
import { sanityFetch } from "../live"

const searchCourses = async(courseQuery : string) => {

    const searchQuery = defineQuery(`*[_type == "course" && (
        title match $courseQuery + "*" || 
        description match $courseQuery + "*" || 
        category->name match $courseQuery + "*"  
    )] {
        ...,
        "slug":slug.current,
        "category":category->{...},
        "instructor":instructor->{...}
    }`)

    const courses = await sanityFetch({
        query:searchQuery,
        params:{courseQuery}
    })

    return courses.data
}

export default searchCourses
