import { getSkeletonProps, getJSSkeletonProps } from '../../../src'

const contentSkeleton = getSkeletonProps({ kind: 'content' })
const textSkeleton = getSkeletonProps({ kind: 'text' })

export default function Skeleton(props) {
  if (props.logJS) {
    console.log({ ...getJSSkeletonProps({ kind: 'circle' }) })
  }

  return (
    <div id="skeleton">
      <h3>Skeleton</h3>
      <div className="App-container">
        <div {...contentSkeleton} style={{ width: '48%' }}>
          <div>contents wrapped</div>
          <div>won't be visible</div>
        </div>

        <div style={{ height: '1rem' }} />

        <div style={{ width: '48%' }}>
          <div {...textSkeleton} />
          <div {...textSkeleton} />
          <div {...textSkeleton} />
        </div>
      </div>
      <div className="App-container">
        <div {...getSkeletonProps({ kind: 'circle' })} />
        <div style={{ width: '80%' }}>
          <div {...textSkeleton} />
          <div {...contentSkeleton}>
            <h3>A Headline</h3>
            <p>Some follow up text</p>
            <button>ignore</button>
          </div>
        </div>
      </div>
    </div>
  )
}
