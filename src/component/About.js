import React from 'react'
import PropTypes from 'prop-types';

export default function About(props) {
  return (
    <div style={props.mode==='light'?{color:'black'}:{color:'white'}}>
        <br /><br /><br />
        <div className="container" >
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi quo ipsa ex exercitationem, laudantium, ratione dolorum sapiente recusandae voluptatibus ducimus omnis incidunt iusto suscipit rem voluptates velit qui corrupti obcaecati explicabo aperiam hic. Molestiae velit ipsam iusto quaerat, soluta deleniti fuga ullam dolores sunt culpa odit? Vel quis iusto sit, maiores vero autem tenetur veniam delectus laudantium iste facilis nesciunt est aliquid quam possimus, nam ut eum a harum architecto.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus architecto obcaecati natus in necessitatibus, iste tempora vitae libero cupiditate blanditiis dolorem amet, voluptatibus sapiente iure praesentium, reiciendis voluptates impedit minus ad. Cumque voluptas, omnis aut ipsam labore reprehenderit doloremque voluptatibus distinctio quasi perferendis error id praesentium quia eum deleniti ipsa vero, voluptate quam aperiam. Quaerat ducimus ipsa recusandae et rem delectus dolores amet ratione aliquam rerum autem, commodi ut deleniti ipsam doloremque adipisci. Enim accusantium expedita qui impedit a quaerat, laudantium magni sapiente beatae illo ea consequuntur veniam tempora eligendi fugit magnam quasi corporis voluptates. Sed ea laborum magnam pariatur.</p>
        </div>
      
    </div>
  )
}
